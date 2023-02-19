import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from './Login.styled';

interface ILoginProps {}

const Login: React.FC<ILoginProps> = () => {
  return (
    <>
      <span>Login</span>
      <Nav>
        <NavLink to="/">Login</NavLink>
        <NavLink to="register">Register</NavLink>
        <NavLink to="transactions">Transactions</NavLink>
        <NavLink to="404">404</NavLink>
      </Nav>
    </>
  );
};

export default Login;
