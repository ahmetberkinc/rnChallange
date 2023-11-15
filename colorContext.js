import React, {createContext, useState} from 'react';

const ColorContext = createContext();

export const ColorContextProvider = ({children}) => {
  const [heartColor, setHeartColor] = useState('#FF4433');

  const values = {
    heartColor,
    setHeartColor,
  };

  return (
    <ColorContext.Provider value={values}>{children}</ColorContext.Provider>
  );
};

export default ColorContext;
