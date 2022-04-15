import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Error from '../components/Error';
import Home from '../components/Home';
import NavbarPage from '../pages/Navbar';
import { data } from '../utils/navbar';
const Root = () => {
  return (
    <Routes>
      <Route element={<NavbarPage />}>
        {data.map(({ id, path, Component }) => (
          <Route key={id} path={path} element={<Component />} />
        ))}
        <Route />
        <Route path='/' element={<Home />} />
      </Route>
      <Route path='*' element={<Error />} />
    </Routes>
  );
};

export default Root;
