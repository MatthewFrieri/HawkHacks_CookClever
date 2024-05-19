import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [userId, setUserId] = useState('');

  return (
    <MyContext.Provider value={{ userId, setUserId }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
