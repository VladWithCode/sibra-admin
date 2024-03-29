import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from '../App';
import ErrorScreen from '../components/Screen/ErrorScreen';
import Calendar from '../screens/Calendar/Calendar';
import Customer from '../screens/Customers/Customer';
import Customers from '../screens/Customers/Customers';
import Home from '../screens/Home';
import LotListing from '../screens/Lots/LotListing';
import Project from '../screens/Projects/Project';
import Projects from '../screens/Projects/Projects';
import Templates from '../screens/Templates/Templates';

function MainRouter() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="/projects" element={<Projects />}></Route>
                    <Route path="/project/:pid">
                        <Route index element={<Project />} />
                        <Route path="lots" element={<LotListing />} />
                        <Route
                            path="charge/:cid/edit"
                            element={<>hello world</>}></Route>
                    </Route>
                    <Route path="/customers">
                        <Route index element={<Customers />}></Route>
                        <Route path=":id" element={<Customer />}></Route>
                    </Route>
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/templates" element={<Templates />} />
                    <Route
                        path="*"
                        element={
                            <ErrorScreen
                                error={{
                                    title: 'No encontrado',
                                    message:
                                        'La pagina que estas buscando no existe. :(',
                                }}
                            />
                        }
                    />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default MainRouter;
