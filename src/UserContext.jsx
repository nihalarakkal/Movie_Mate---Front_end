import React, { createContext, useContext } from 'react';

const UserContext = createContext({ id: 1 });

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ id: 1 }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
