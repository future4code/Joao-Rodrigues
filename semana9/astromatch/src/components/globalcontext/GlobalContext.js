import React from 'react'

export const GlobalContext = React.createContext()

export const GlobalStorage = ({children}) =>{
    const [next, setNext] = React.useState(0)
    return(
        <GlobalContext.Provider value={{next, setNext}}>
            {children}
        </GlobalContext.Provider>
    )
}