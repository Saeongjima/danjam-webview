import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routesConfig';

const AppRouter: React.FC = () => (
  <Router>
    <Routes>
      {routes.map(({ path, component: Component }, index) => (
        <Route key={index} path={path} element={<Component />} />
      ))}
    </Routes>
  </Router>
);

export default AppRouter;