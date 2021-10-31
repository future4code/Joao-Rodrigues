import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router'
import Header from '../../components/Header/Header'
import { BASE_URL_IMG } from '../../constants/api'
import { getMovieDetails, getTrailers } from '../../services/get'
import { 
    DetailsContainer, 
    TitleContainer,
    InfoContainer, 
    TextContainer, 
    TrailerContainer,
} from './styled'

const VideoDetailsPage = () => {
    const [movieDetails, setMovieDetails] = useState({})
    const [trailers, setTrailers] = useState([])
    const {movieId} = useParams()

    useEffect(()=>{
        getMovieDetails(movieId, setMovieDetails)
        getTrailers(movieId, setTrailers)
    },[])

    const {genres} = movieDetails
    console.log(trailers)

    return (
        <div>
            <Header/>

            <DetailsContainer>
                <TitleContainer>
                    <h2>{movieDetails.title}</h2>
                </TitleContainer>

                <InfoContainer>
                    <TextContainer>
                        <img src={`${BASE_URL_IMG}${movieDetails.poster_path}`} alt="poster" />

                        <div>
                            <span><strong>Titulo original:</strong> {movieDetails.original_title}</span>
                            <span><strong>Genero:</strong> {genres && genres.map((genre)=>{
                                return(
                                    <span key={genre.id}>{genre.name} </span>
                                )
                            })}</span>
                            <span><strong>Popularidade:</strong> {movieDetails.popularity}</span>
                            <span><strong>Nota IMDb:</strong> {movieDetails.vote_average}</span>
                            <span><strong>Duraçao:</strong> {movieDetails.runtime} minutos</span>
                            <span><strong>Sinopse:</strong> {movieDetails.overview}</span>
                        </div>
                    </TextContainer>
                        
                    <TrailerContainer>
                        
                        {trailers && trailers.map((trailer, index)=>{
                            if(index === 0){
                                return(
                                    <>
                                        <div id='desktop'>
                                            <h4>Trailer Oficial</h4>
                                            <ReactPlayer 
                                                url={`https://www.youtube.com/watch?v=${trailer.key}`}
                                                controls={true}
                                                width={'426px'}
                                                height={'240px'}
                                            />
                                        </div>

                                        <div id='mobile'>
                                            <h4>Trailer Oficial</h4>
                                            <ReactPlayer 
                                                url={`https://www.youtube.com/watch?v=${trailer.key}`}
                                                controls={true}
                                                width={'100%'}
                                                height={'240px'}
                                            />
                                        </div>
                                    </>

                                    
                                )  
                            }
                        })}   
                        
                        
                    </TrailerContainer>
                </InfoContainer>
            </DetailsContainer>

        </div>
        
    )
}

export default VideoDetailsPage
