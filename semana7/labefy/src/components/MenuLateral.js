import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { RiPlayListFill, RiDeleteBin6Fill} from 'react-icons/ri'
import { GlobalContext } from './GlobalContext'

const LateralMenu = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px 20px;
    max-width: 100%;
    width: 280px;
    height: 86vh;
    color: white;
    box-shadow: 2px 0 3px rgba(0, 0, 0, 0.5);

    ul{
        margin-bottom: 60px;
    }
`

const TituloLateral = styled.h3`
    margin-bottom: 15px;

`

const ContainerPlaylistItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const PlaylistItem = styled.li`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 2px;
    transition: .3s;
    font-size: .85em;
    width: 100%;
    margin-right: 3px;
    list-style: none;

    :hover{
        background-color: #121212;
        color: #2196F3;
    }
`

const IconePlaylist = styled.span`
    margin:  5px 5px 0 0;
`

const IconeDelete = styled.span`
    font-size: 0.85em;
    color: #2196F3;
    cursor: pointer;
    padding: 2px;
    transition: .3s;

    :hover{
        color: #0b7dda;
    }
`

const ContainerCriar = styled.div`
    margin-top: 3px;
`

const Input = styled.input`
    padding: 5px 5px 5px 10px;
    width: 60%;
    border-radius: 12px 0 0 12px;
    border: none;
    font-size: .75em;
    outline: none;
`

const Botao = styled.button`
    padding: 5px;
    width: 25%;
    border: none;
    border-radius: 0 12px 12px 0;
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

const MenuLateral = () => {
    // const [playlists, setPlaylists] = React.useState([])
    // const [valorInput, setValorInput] = React.useState('')
    const global = React.useContext(GlobalContext)

    React.useEffect(()=>{
        pegarPlaylists()
    },[])

    React.useEffect(()=>{
        pegarPlaylists()
    },[global.playlists])

    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

    const headers = {
        headers: {
            Authorization: 'joaopedro-lopes-molina'
        }
    }

    const pegarPlaylists = async ()=>{
        try {
            const response = await axios.get(url, headers)
            global.setPlaylists(response.data.result.list)
        } catch (error) {
            console.log(error.response)
            alert('Ocorreu algum erro!')
        }
    }

    const onChangeInput = ((event)=>{
        global.setValorInput(event.target.value)
    })

    const criarPlaylist = async ()=>{
        const body = {
            name: global.valorInput
        }

        try {
            const response = await axios.post(url, body, headers)
            alert(`${global.valorInput} criada com sucesso!`)
            global.setValorInput('')
        } catch (error) {
            alert(error.response.data.message)
            global.setValorInput('')
        }   
    }

    const excluirPlaylist = ((id, name)=>{
        switch (window.confirm('Você está certo disso?')) {
            case true:
                    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
                    axios.delete(url, headers)
                    .then((response)=>{
                        alert(`${name} excluida!`)
                    }).catch((error)=>{
                        alert(error.response.data.message)
                    })
                    
                break;
            default:
                break;
        }
    })

    const pegarDetalhes = ((id, name)=>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        axios.get(url, headers)
        .then((response)=>{
            global.setMusicas(response.data.result.tracks)
            global.setPlaylistClicada(name)
            global.setIdPlaylistClicada(id)
        }).catch((error)=>{
            console.log(error.message)
        })

        console.log(global.idPlaylistClicada)
    })

    const suasPlaylists = global.playlists.map(({id, name})=>{
        return(
            <ContainerPlaylistItem key={id}>
                <PlaylistItem onClick={()=>pegarDetalhes(id, name)}>
                    <IconePlaylist><RiPlayListFill/></IconePlaylist>
                    <p>{name}</p>
                </PlaylistItem>
                <IconeDelete onClick={()=>excluirPlaylist(id, name)}><RiDeleteBin6Fill/></IconeDelete>
            </ContainerPlaylistItem>
            
        )
    })

    return (
        <LateralMenu>
            <TituloLateral>Suas Playlists</TituloLateral>
            <ul>
                {suasPlaylists}
            </ul>

            <TituloLateral>Criar Playlist</TituloLateral>
            <ContainerCriar>
                <Input
                    type='text' 
                    placeholder='Nome da playlist'
                    maxlength='25'
                    onChange={onChangeInput}
                    value={global.valorInput}
                />
                <Botao onClick={criarPlaylist}>Criar</Botao>
            </ContainerCriar>
        </LateralMenu>
    )
}

export default MenuLateral