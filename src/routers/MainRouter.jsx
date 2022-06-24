import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from '../App';
import Calendar from '../screens/Calendar/Calendar';
import Customers from '../screens/Customers/Customers';
import Error from '../screens/Error';
import Home from '../screens/Home';
import Project from '../screens/Projects/Project';
import Projects from '../screens/Projects/Projects';
import Templates from '../screens/Templates/Templates';

function MainRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/details/:pid' element={<Project />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/templates' element={<Templates />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default MainRouter;
