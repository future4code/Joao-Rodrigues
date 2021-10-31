export interface Loterias{
    id: number | string
    nome: string
}

export interface LoteriasConcursos{
    loteriaId: number
    concursoId: string
}

export interface Concursos{
    id: string
    loteria: number
    numeros: [string]
    data: string
}