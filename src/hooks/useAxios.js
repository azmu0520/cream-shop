import axios from 'axios';

// const { REACT_APP_BASE_URL } = process.env;
export const useAxios = () => {
  const request = async ({
    url = '',
    method = 'get',
    body = null,
    headers = {},
    includeToken = true,
  }) => {
    return await axios({
      method,
      url: `${url}`,
      data: {
        ...body,
      },
      headers: {
        Authorization: `${
          includeToken && `Bearer ${localStorage.getItem('token')}`
        }`,
        'Content-Type': 'application/json',
        ...headers,
      },
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        return error;
      });
  };
  return { request };
};
