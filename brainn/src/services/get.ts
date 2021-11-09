import { BASE_URL } from './../constants/api';
import axios from "axios";

export const getLoterias = async(setLoterias: any):Promise<void> =>{
    await axios.get(`${BASE_URL}/loterias`)
    .then((res)=>{
        setLoterias(res.data)
    })
    .catch((err)=>{
        console.log(err.response)
    })
}

export const getLoteriasConcursos = async(setLoterias: any):Promise<void> =>{
    await axios.get(`${BASE_URL}/loterias-concursos`)
    .then((res)=>{
        setLoterias(res.data)
    })
    .catch((err)=>{
        console.log(err.response)
    })
}

export const getConcursos = async(setConcursos: any, idConcurso: string | undefined):Promise<void> =>{
    await axios.get(`${BASE_URL}/concursos/${idConcurso}`)
    .then((res)=>{
        setConcursos(res.data)
    })
    .catch((err)=>{
        console.log(err.response)
    })
}