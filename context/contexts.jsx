import React, { useState, createContext } from 'react'

const UseContext = createContext({});

export function UseContextProvider({ children }) {
  const [ clicked, setClicked ] = useState(false);

  return(
    <UseContext.Provider value={{
      clicked, setClicked,
    }}>
      {children}
    </UseContext.Provider>
  )
}

export default UseContext;
