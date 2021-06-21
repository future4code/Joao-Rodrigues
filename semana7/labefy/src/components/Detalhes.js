import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { GlobalContext } from './GlobalContext'
import {RiDeleteBin6Fill} from 'react-icons/ri'
import YouTube from 'react-youtube';

var getYouTubeId = require('get-youtube-id')



const ContainerDetalhes = styled.div`
    display: flex;
`

const ContainerMusicas = styled.div`
    flex: 2;
    display: flex;
    flex-wrap: wrap;
    height: 250px;

    ol{
        margin-left: 20px;
    }
`

const ContainerAddMusica = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-top: 30px;
    

    h3{
        margin-bottom: 20px;
        color: white;
    }
`

const InputAddMusica = styled.input`
    padding: 5px 5px 5px 10px;
    width: 70%;
    border-radius: 12px;
    border: none;
    font-size: .75em;
    outline: none;
    margin-bottom: 15px;

`

const BotaoAddMusica = styled.button`
    padding: 5px;
    width: 70%;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    background-color: #2196F3;
    transition: 0.3s;
    color: white;
    outline: none;
    font-size: .75em;
    font-weight: bold;

    :hover{
        background: #0b7dda;
    }
`

const MusicaItem = styled.li`
    color: white;
    font-size: .94em;
    margin-bottom: 3px;
    cursor: pointer;    
`

const Musica = styled.span`
    transition: 0.3s;
    color: white;
    :hover{
        opacity: 0.5;
    }
`

const TituloPlaylist = styled.h2`
  text-align: center;
  font-size: 2em;
  color: white;
  margin-bottom: 30px;
`

const IconeDelete = styled.span`
    color: #222;
    cursor: pointer;
    padding: 2px;
    transition: .3s;
    padding: 0;
    display: inline-block;
    margin: 0 15px;
    padding: 4px 0;

    :hover{
        color: #2196F3;
    }
`

const Detalhes = () => {
    // const [inputMusica, setInputMusica] = React.useState('')
    // const [inputArtista, setInputArtista] = React.useState('')
    // const [inputLink, setInputLink] = React.useState('')
    // const [click, setClick] = React.useState(true)
    const [link, setLink] = React.useState('')

    const global = React.useContext(GlobalContext)

    // React.useEffect(()=>{
    //     // localStorage.setItem('musicas', JSON.stringify(global.musicas))
    //     console.log(global.musicas)
    // },[click])

    const opts = {
        height: '260',
        width: '480',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    const onChangeMusica = ((event)=>{
        global.setInputMusica(event.target.value)
    })

    const onChangeArtista = ((event)=>{
        global.setInputArtista(event.target.value)
    })

    const onChangeLink = ((event)=>{
        global.setInputLink(event.target.value)
    })

    const headers = {
        headers: {
            Authorization: 'joaopedro-lopes-molina'
        }
    }

    const pegarMusicas = (()=>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${global.idPlaylistClicada}/tracks`
        axios.get(url, headers)
        .then((response)=>{
            global.setMusicas(response.data.result.tracks)
        }).catch((error)=>{
            console.log(error.message)
        })
    })

    const adicionarMusica = async ()=>{
        try {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${global.idPlaylistClicada}/tracks` 

            const body = {
                name: global.inputMusica,
                artist: global.inputArtista,
                url: global.inputLink
            }

            if(global.idPlaylistClicada !== 0){
                const response = await axios.post(url, body, headers)
                // localStorage.setItem('musicas')
                global.setInputMusica('')
                global.setInputArtista('')
                global.setInputLink('')
                pegarMusicas()
                alert('Musica adicionada a playlist')
            }else{
                alert('Primeiro selecione uma playlist')
                global.setInputMusica('')
                global.setInputArtista('')
                global.setInputLink('')
            }
    
        } catch (error) {
            alert(error.message)
        }
        
    }

    const excluirMusica = ((id, name)=>{
        switch (window.confirm('Você está certo disso?')) {
            case true:
                    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${global.idPlaylistClicada}/tracks/${id}`
                    axios.delete(url, headers)
                    .then((response)=>{
                        pegarMusicas()
                        alert(`${name} excluida!`)
                    }).catch((error)=>{
                        alert(error.response.data.message)
                    })
                break;
            default:
                break;
        }
    })

    const mostrarVideo = ((url, name)=>{
        setLink(url)
    })

    const listaDeMusicas = global.musicas.map(({id, name, artist, url})=>{
        return(
            <MusicaItem key={id} onClick={()=>mostrarVideo(url, name)}>
                <Musica>
                    {name} - {artist}
                </Musica>
                
                <IconeDelete onClick={()=>excluirMusica(id, name)}>
                    <RiDeleteBin6Fill/>
                </IconeDelete>
            </MusicaItem>
        )
    })

    

    return (
        <div>
            <TituloPlaylist>{global.playlistClicada}</TituloPlaylist>
            <ContainerDetalhes>
                <ContainerMusicas>
                    <ol>
                        {listaDeMusicas}
                    </ol>
                </ContainerMusicas>

                <ContainerAddMusica>
                    <h3>Adicionar Musica</h3>
                    <InputAddMusica
                        placeholder='Nome da musica'
                        onChange={onChangeMusica}
                        value={global.inputMusica}
                        type='text'
                    />

                    <InputAddMusica
                        placeholder='Nome do artista'
                        onChange={onChangeArtista}
                        value={global.inputArtista}
                        type='text'
                    />

                    <InputAddMusica
                        placeholder='Id da musica'
                        onChange={onChangeLink}
                        value={global.inputLink}
                        type='text'
                    />
                    <BotaoAddMusica onClick={adicionarMusica}>Adicionar musica</BotaoAddMusica>
                </ContainerAddMusica>
            </ContainerDetalhes>
            <YouTube videoId={link} opts={opts} />;
        </div>
    )
}

export default Detalhes
