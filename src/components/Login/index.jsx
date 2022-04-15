import React, { useState } from 'react';
import axios from 'axios';
import { useUsersContext } from '../../context/User';
import { useNavigate } from 'react-router-dom';
import { Wrap } from './style';
const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const [reg, setReg] = useState({
    email: '',
    password: '',
  });
  const [{ usersList }, dispatch] = useUsersContext();
  const navigate = useNavigate();

  let logIn = async () => {
    await axios({
      url: 'https://reqres.in/api/login',
      method: 'POST',
      data: state,
    })
      .then((res) => {
        if (res?.status === 200) {
          localStorage.setItem('token', res?.data?.token);
          navigate('/home');
        }
      })
      .catch((error) => alert(error.response.data.error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleReg = (e) => {
    const { name, value } = e.target;
    setReg({
      ...reg,
      [name]: value,
    });
  };
  const register = async () => {
    await axios({
      url: 'https://reqres.in/api/register',
      method: 'POST',
      data: reg,
    })
      .then((res) => {
        res?.data?.token && alert('Successfuly registered');
      })
      .catch((error) => alert(error.response.data.error));
    setReg({
      email: '',
      password: '',
    });
  };

  return (
    <Wrap>
      <Wrap>
        <h1>Login if you registed before</h1>
        <form>
          <label htmlFor='email'> Email</label>
          <input
            type='email'
            name='email'
            id='email'
            required
            onChange={handleChange}
            autoComplete='new-password'
          />
          <br />
          <label htmlFor='password'> Password</label>
          <input
            type='password'
            name='password'
            id='password'
            required
            onChange={handleChange}
            autoComplete='new-password'
          />
          <br />
          <input type={'button'} onClick={logIn} value='login' />
        </form>
      </Wrap>
      <Wrap>
        <h1>Register if you are new</h1>

        <form>
          <label htmlFor='email'> Email</label>
          <input
            type='email'
            name='email'
            id='email'
            required
            value={reg.email}
            onChange={handleReg}
            autoComplete='new-password'
          />
          <br />
          <label htmlFor='password'> Password</label>
          <input
            type='password'
            name='password'
            value={reg.password}
            id='password'
            required
            onChange={handleReg}
            autoComplete='new-password'
          />
          <br />
          <input type={'button'} onClick={register} value='register' />
        </form>
      </Wrap>
    </Wrap>
  );
};

export default Login;
