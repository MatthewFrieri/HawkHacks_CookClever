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






const FeedbackContext = createContext();

const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState({
    one: 'preppy',
    two: 'choppy',
    three: 'fries'
  })

  return (
    <FeedbackContext.Provider value={{ feedback, setFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export { FeedbackContext, FeedbackProvider };
