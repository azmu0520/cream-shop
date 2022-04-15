import React from 'react';
import NavbarComp from '../../components/Navbar';
import { Outlet } from 'react-router-dom';

const NavbarPage = () => {
  return (
    <div>
      <NavbarComp />
      <Outlet />
    </div>
  );
};

export default NavbarPage;
