import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from '../App';
import Home from '../screens/Home';

function MainRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default MainRouter;
