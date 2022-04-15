import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      Are you lost ? <span onClick={() => navigate('/home')}>click here </span>
    </div>
  );
};

export default Error;
