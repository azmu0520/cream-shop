import React, { useReducer, createContext, useContext } from 'react';
import { reducer, initialState } from './userReducers';
export const UsersContext = createContext();
export const useUsersContext = () => useContext(UsersContext);

export const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UsersContext.Provider value={[state, dispatch]}>
      {children}
    </UsersContext.Provider>
  );
};
