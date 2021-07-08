import React, { useContext } from 'react'
// import axios from 'axios'
import {ContainerListTrip, ContainerBtn, Title} from './styled'
import Button from '../../components/button/Button'
import Footer from '../../components/footer/Footer'
import CardTrips from '../../components/cardtrip/CardTrips'
import { GlobalContext } from '../../components/globalcontext/GlobalContext'

const ListTripsPage = () => {
    const global = useContext(GlobalContext)

    return (
        <div>       
            <ContainerListTrip>
                <ContainerBtn>
                    <Button
                        name='Voltar'
                        color='#0B3D92'
                    />
                    <Button
                        name='Inscrever-se'
                        color='#FF301B'
                    />
                </ContainerBtn>
                <Title>Lista de Viagens</Title>
                {global.tripsList.map(({id, name, planet, date, durationInDays, description})=>{
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
                
            </ContainerListTrip>
            <Footer/>
        </div>
    )
}

export default ListTripsPage
