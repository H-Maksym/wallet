import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from 'pages/Login/Login';
import Register from 'pages/Register';
import Layout from 'pages/Layout';
import Home from 'pages/Home';
import Statics from 'pages/Statics/Statics';
import NotFound from 'pages/NotFound';

interface IAppRoutesProps {}

const AppRoutes: React.FC<IAppRoutesProps> = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="transactions" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="statics" element={<Statics />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
