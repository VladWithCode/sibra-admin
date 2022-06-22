import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from '../App';
import Error from '../screens/Error';
import Home from '../screens/Home';
import Projects from '../screens/Projects/Projects';

function MainRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default MainRouter;
