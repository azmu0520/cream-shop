import axios from 'axios';
import React, { useEffect } from 'react';
import { useUsersContext } from '../../context/User';

const Single = () => {
  const [{ id, single }, dispatch] = useUsersContext();
  // https://reqres.in/api/users/2

  useEffect(() => {
    (async function () {
      await axios({
        url: `https://reqres.in/api/users/${id}`,
        method: 'GET',
      })
        .then((res) => {
          dispatch({ type: 'setSingle', payload: res?.data?.data });
        })
        .catch((error) => alert(error?.response?.data?.error));
    })();
  }, []);
  console.log(single);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img src={single?.avatar} alt='as' />
      <h2>
        {single?.first_name} {single?.last_name}
      </h2>
    </div>
  );
};

export default Single;
