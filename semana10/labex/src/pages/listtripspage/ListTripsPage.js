import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Button from '../../components/button/Button'
import CardTrips from '../../components/cardtrip/CardTrips'

const ContainerMain = styled.div`
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div:nth-child(1){
        display: flex;
        justify-content: space-between;
        width: 230px;
        max-width: 230px;
    }
`

const Title = styled.h1`
    color: #FF301B;
    margin: 50px 0 20px 0;
`

const ListTripsPage = () => {
    const [tripsList, setTripsList] = React.useState([])

    React.useEffect(()=>{
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/joaopedro-lopes-molina/trips')
        .then((res)=>{
            setTripsList(res.data.trips)
            console.log(res.data.trips)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    return (
        <ContainerMain>
            <div>
                <Button
                    name='Voltar'
                    color='#0B3D92'
                />
                <Button
                    name='Inscrever-se'
                    color='#FF301B'
                />
            </div>
            <Title>Lista de Viagens</Title>
            {tripsList.map(({id, name, planet, date, durationInDays, description})=>{
                return(
                    <CardTrips
                        key={id}
                        name={name}
                        planet={planet}
                        date={date}
                        durationInDays={durationInDays}
                        description={description}
                    />
                )
            })}
        </ContainerMain>
    )
}

export default ListTripsPage
