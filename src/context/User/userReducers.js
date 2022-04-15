export const initialState = {
  page: 1,
  size: 20,
  total: 0,
  usersList: [],
  single: [],
  id: 1,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'setPage':
      return { ...state, page: action.payload };
    case 'setSize':
      return { ...state, size: action.payload };
    case 'setTotal':
      return { ...state, total: action.payload };
    case 'setUserList':
      return { ...state, usersList: action.payload };
    case 'setSingle':
      return { ...state, single: action.payload };
    case 'setId':
      return { ...state, id: action.payload };
    default:
      return state;
  }
};
