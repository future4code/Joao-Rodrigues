import axios from "axios";
import { API_KEY, BASE_URL, LANGUAGE, REGION} from "../constants/api";

export const getPopularMovies = (page, setPopularMovieList) => {
    axios.get(`${BASE_URL}/movie/popular?${API_KEY}${LANGUAGE}&page=${page}${REGION}`)
    .then((res)=>{
        setPopularMovieList(res.data.results)
    })
    .catch((err)=>{
        console.error(err.response)
    })
}

export const getMovieDetails = (movieId, setMovieDetails) =>{
    axios.get(`${BASE_URL}/movie/${movieId}?${API_KEY}${LANGUAGE}`)
    .then((res)=>{
        setMovieDetails(res.data)
    })
    .catch((err)=>{
        console.error(err.response)
    })
} 

export const getGenres = (setGenreList) =>{
    axios.get(`${BASE_URL}/genre/movie/list?${API_KEY}${LANGUAGE}`)
    .then((res)=>{
        setGenreList(res.data.genres)
    })
    .catch((err)=>{
        console.log(err.response)
    })
}

export const getTopRated = (setTopRatedList) =>{
    axios.get(`${BASE_URL}/movie/top_rated?${API_KEY}${LANGUAGE}&page=1${REGION}`)
    .then((res)=>{
        setTopRatedList(res.data)
    })
    .catch((err)=>{
        console.error(err.response)
    })
}

export const getTrailers = (movieId, setTrailers) =>{
    axios.get(`${BASE_URL}/movie/${movieId}/videos?${API_KEY}${LANGUAGE}`)
    .then((res)=>{
        setTrailers(res.data.results)
    })
    .catch(()=>{

    })
}