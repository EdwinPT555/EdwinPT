import React, { useState } from "react";


export const AppProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [isCodeMode, setIsCodeMode] = useState<boolean>(false);
  const [colorScheme, setColorScheme] = useState({ color: '#111', background: '#daa520' });

  const toggleCodeMode = () => {
    setIsCodeMode((prevIsCodeMode) => !prevIsCodeMode);
    if (isCodeMode) {
      setColorScheme({ color: '#daa520', background: '#111' })
    } else {
      setColorScheme({ color: '#111', background: '#daa520' })
    }
  }

  return (
    <AppContext.Provider value={{
      isCodeMode,
      colorScheme,
      toggleCodeMode
    }}>
      {props.children}
    </AppContext.Provider>
  )
}


const AppContext = React.createContext<IAppContext>({
  isCodeMode: false,
  colorScheme: { color: '#111', background: '#daa520' },
  toggleCodeMode: () => { }
});

export default AppContext;

interface IAppContext {
  isCodeMode: boolean;
  colorScheme: { color: string, background: string };
  toggleCodeMode: () => void
}