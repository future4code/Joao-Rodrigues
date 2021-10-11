import React from 'react'
import { BASE_URL_IMG } from '../../constants/api'
import { ContainerCard } from './styled'

const MovieCard = ({shadow, movie}) => {
    return (
        <ContainerCard shadow={shadow}>
            <img 
                src={`${BASE_URL_IMG}${movie && movie.poster_path}`} 
                alt="poster" 
                title={movie && movie.title}
            />
        </ContainerCard>
    )
}

export default MovieCard
