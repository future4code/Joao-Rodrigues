import React from 'react'
import {Card, ContainerInfo, Info} from './styled'

const CardTrips = ({id, name, description, planet, durationInDays, date}) => {
    return (
        <Card>
            <h3>{name}</h3>
            <ContainerInfo>
                <Info>Descrição: </Info>
                <span>{description}</span>
            </ContainerInfo>

            <ContainerInfo>
                <Info>Planeta: </Info>
                <span>{planet}</span>
            </ContainerInfo>

            <ContainerInfo>
                <Info>Duração: </Info>
                <span>{durationInDays}</span>
            </ContainerInfo>

            <ContainerInfo>
                <Info>Data: </Info>
                <span>{date}</span>
            </ContainerInfo>

        </Card>
    )
}

export default CardTrips
