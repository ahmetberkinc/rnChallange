import React, {createContext, useState} from 'react';

const MainContext = createContext();

export const MainContextProvider = ({children}) => {
  const [heartColor, setHeartColor] = useState('#FF4433');
  const [updateToggle, setUpdateToggle] = useState(false);

  const values = {
    heartColor,
    setHeartColor,
    updateToggle,
    setUpdateToggle,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export default MainContext;
