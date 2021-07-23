import React, { createContext, useState, useEffect } from "react"
import axios from "axios"
import { urlBase } from "../constants/Constants"

export const GlobalContext = createContext()

export const GlobalStorage = ({children}) =>{
    const [postsList, setPostsList] = useState([])

    useEffect(()=>{
        getPosts()
    })
    
    const getPosts = () =>{
        const token = localStorage.getItem('token')

        const headers ={
            headers:{
                Authorization: token
            }
        }

        axios.get(`${urlBase}/posts`, headers)
        .then((res)=>{
            setPostsList(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <GlobalContext.Provider value={{postsList, setPostsList, getPosts}}>
            {children}
        </GlobalContext.Provider>
    )
}