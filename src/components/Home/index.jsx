import React, { useEffect, useState } from 'react';
import { useUsersContext } from '../../context/User';
import { Wrap } from './style';
import axios from 'axios';
import { Table, Tag, Space } from 'antd';
import Single from '../SingleUser';
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: '',
    job: '',
  });
  const [{ usersList }, dispatch] = useUsersContext();
  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'name',
      render: (src) => <img src={src} alt='avatar' />,
    },
    {
      title: 'Name',
      dataIndex: 'first_name',
      key: 'name',
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'PLast Name',
    },
  ];

  async function onAdd() {
    await axios({
      url: 'https://reqres.in/api/users',
      method: 'POST',
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => alert(error.response.data.error));
  }

  useEffect(() => {
    (async function () {
      await axios({
        url: 'https://reqres.in/api/users',
        method: 'GET',
      })
        .then((res) => {
          dispatch({ type: 'setUserList', payload: res?.data?.data });
        })
        .catch((error) => alert(error.response.data.error));
    })();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  return (
    <Wrap>
      {localStorage.token ? (
        <div className='wrap-all'>
          <div className='wrap'>
            {usersList?.map((item) => {
              return (
                <div
                  className='list'
                  onClick={() =>
                    dispatch(
                      { type: 'setId', payload: item?.id },
                      navigate('/single')
                    )
                  }
                >
                  <p>{item?.first_name}</p>
                  <p>{item?.email}</p>
                  <img src={item?.avatar} alt='avatra' />
                </div>
              );
            })}
          </div>

          <input
            type='text'
            name='name'
            placeholder='name'
            value={state.name}
            onChange={handleChange}
          />
          <input
            type='text'
            name='job'
            placeholder='job'
            value={state.job}
            onChange={handleChange}
          />
          <input type='button' onClick={onAdd} value={'add'} />
        </div>
      ) : (
        <div>
          <h1>Login to see the data</h1>
        </div>
      )}
    </Wrap>
  );
};

export default Home;
