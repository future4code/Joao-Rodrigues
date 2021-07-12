import React, { useContext } from 'react'
import {ContainerListTrip, ContainerBtn, Title} from './styled'
import Button from '../../components/button/Button'
import Footer from '../../components/footer/Footer'
import CardTrips from '../../components/cardtrip/CardTrips'
import { GlobalContext } from '../../components/globalcontext/GlobalContext'
import { useHistory } from 'react-router-dom'

const ListTripsPage = () => {
    const global = useContext(GlobalContext)
    const history = useHistory()

    return (
        <div>       
            <ContainerListTrip>
                <ContainerBtn>
                    <Button
                        onClick={()=>history.goBack()}
                        name='Voltar'
                        color='#0B3D92'
                    />
                    <Button
                        onClick={()=>history.push('/applicationform')}
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
