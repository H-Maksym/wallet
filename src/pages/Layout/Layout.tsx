import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
const Layout: React.FC = () => {
  return (
    <div>
      <nav>
        <NavLink to="/transactions">Home</NavLink>
        <NavLink to="statics">Statics</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
