import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from '../App';
import Home from '../screens/Home';

function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
