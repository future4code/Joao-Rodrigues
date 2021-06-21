import React from 'react'

export const GlobalContext = React.createContext()

export const GlobalStorage = ({children})=>{
    const [playlists, setPlaylists] = React.useState([])
    const [valorInput, setValorInput] = React.useState('')
    const [inputMusica, setInputMusica] = React.useState('')
    const [inputArtista, setInputArtista] = React.useState('')
    const [inputLink, setInputLink] = React.useState('')
    const [musicas, setMusicas] = React.useState([])
    const [playlistClicada, setPlaylistClicada] = React.useState('Nenhuma playlist selecionada')
    const [idPlaylistClicada, setIdPlaylistClicada] = React.useState(0)

    return(
        <GlobalContext.Provider 
            value={{playlists, setPlaylists, valorInput, setValorInput, inputMusica, setInputMusica, 
            inputArtista, setInputArtista, inputLink, setInputLink, musicas, setMusicas, 
            playlistClicada, setPlaylistClicada, idPlaylistClicada, setIdPlaylistClicada}}>
            {children}
        </GlobalContext.Provider>
    )
}