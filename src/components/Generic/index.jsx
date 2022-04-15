import React from 'react';
import { useLocation } from 'react-router-dom';
const Generic = () => {
  const location = useLocation();

  return <div>{location.pathname}: is comming soon</div>;
};

export default Generic;
