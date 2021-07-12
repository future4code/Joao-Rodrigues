import React from 'react'
import axios from 'axios'

export const GlobalContext = React.createContext()

export const GlobalStorage = ({children}) => {
    const [tripsList, setTripsList] = React.useState([])

    React.useEffect(()=>{
        console.log()
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/joaopedro-lopes-molina/trips')
        .then((res)=>{
            setTripsList(res.data.trips)
        }).catch((err)=>{
            console.log(err)
        })
    },[tripsList])

    return(
        <GlobalContext.Provider value={{tripsList, setTripsList}}>
            {children}
        </GlobalContext.Provider>
    ) 
}