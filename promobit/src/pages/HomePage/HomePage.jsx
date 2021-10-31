import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { TopRateContainer, 
    ContentMovies, 
    PopularMoviesContainer, 
    Movies, 
    ContainerFilter,
    MovieCardContainer ,
    MovieTitle,
} from './styled'
import MovieCard from '../../components/MovieCard/MovieCard'
import { shadow } from '../../constants/styled'
import Filter from '../../components/Filter/Filter'
import { getGenres, getPopularMovies, getTopRated } from '../../services/get'
import { useHistory } from 'react-router'
import PaginationComponent from '../../components/Pagination/PaginationComponent'


const HomePage = () => {
    const [popularMovieList, setPopularMovieList] = useState([])
    const [topRatedList, setTopRatedList] = useState([])
    const [genreList, setGenreList] = useState([])
    const [chooseGenres, setChooseGenres] = useState([])
    const history = useHistory()
    const [page, setPage] = React.useState(1);

    useEffect(()=>{
        getTopRated(setTopRatedList)
        getGenres(setGenreList)
    },[])

    useEffect(()=>{
        getPopularMovies(page, setPopularMovieList)
    },[page])

    const onClickMovie = (movieId) =>{    
        history.push(`/video-details/${movieId}`)  
    }

    const onChangeCheckbox = (ev) =>{
        if(ev.target.checked){
            setChooseGenres([...chooseGenres, ev.target.value])
        }else{
            setChooseGenres(chooseGenres.filter((genre)=>{
                return genre !== ev.target.value
            }))
        }
    }

    const handleChange = (event, value) => {
        setPage(value);
    };

    const renderTopRated = () =>{
        const {results} = topRatedList

        return results && results.map((movieRate, index)=>{                                           
            if(index < 6){
                return(
                    <MovieCard 
                        key={movieRate.id}
                        movie={movieRate}
                        shadow={shadow}
                        onClick={()=>onClickMovie(movieRate.id)}
                    />
                )
            }    
        })
    }

    const convertIdStringToNumber = () =>{
        let idGenresFilter = chooseGenres.map(i => Number(i))
        return idGenresFilter
    }

    const renderPopularMovies = () =>{
        const genresFilter = convertIdStringToNumber()

        return popularMovieList && popularMovieList.filter((movie)=>{
            const genres = movie.genre_ids

            if(chooseGenres.length === 0){
                return true
            }

            for(let genre of genres){
                if(genresFilter.includes(genre)){
                    return true
                }
                                           
            }

        }).map((movie)=>{
            return(
                <MovieCardContainer 
                    key={movie.id}
                    onClick={()=>onClickMovie(movie.id)}
                >
                    <MovieCard
                        movie={movie}
                    />
                    <MovieTitle>
                        <p>{movie.title}</p>
                    </MovieTitle>   
                </MovieCardContainer>
            )
        })
    }

    return (
        <div>
            <Header/>

            <TopRateContainer>
                <ContentMovies>
                    <h2>Top Rate</h2>
                    <div>
                        {renderTopRated()}             
                    </div>    
                </ContentMovies>                       
            </TopRateContainer>

            <PopularMoviesContainer>
                <div id='title-filter'>
                    <h2>Filmes <span>Mais Populares</span> do Dia</h2>
                    <ContainerFilter>
                        <h3>Generos:</h3>
                        <Filter
                            genreList={genreList}
                            onChangeCheckbox={onChangeCheckbox}
                        />
                    </ContainerFilter>
                </div>

                <Movies>
                    {renderPopularMovies()}
                </Movies>

                <PaginationComponent
                    handleChange={handleChange}
                    page={page}
                />   
                
            </PopularMoviesContainer>

        </div>
    )
}

export default HomePage
