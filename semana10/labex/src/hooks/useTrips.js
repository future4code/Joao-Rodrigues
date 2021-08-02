import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useTrips = () => {
    const [trips, setTrips] = useState()

    useEffect(()=>{
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/joaopedro-lopes-molina/trips')
        .then((res)=>{
            setTripsList(res.data.trips)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    return trips
}

export default useTrips
