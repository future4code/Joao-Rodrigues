import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import {FaWindowClose} from 'react-icons/fa'
import Detalhes from '../detalhes/Detalhes'

const ContainerLista = styled.div`
    width: 350px;
    margin: 0 auto;
    border: 1px solid #9B9D9C;
    padding: 15px;

    h1{
        color: #9B9D9C;
        text-align: center;
        margin-bottom: 20px;
    }
`

const ConatinerItem = styled.div`
    border-bottom: 1px solid #9B9D9C;
    margin-top: 10px;
    padding: 5px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ContainerIcon = styled.div`
    color: #9B9D9C;
    cursor: pointer;

    :active{
        color: red;
    }
`

const Item = styled.li`
    color: white;
    padding: 2px;
    cursor: pointer;
`

const ListaDeUsuarios = () => {
    const [usuarios, setUsuarios] = React.useState([])
    const [modal, setModal] = React.useState(true)

    React.useEffect(()=>{
        pegarUsuarios()
    },[])

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`
    
    const headers = {
        headers:{
            Authorization: "joaopedro-lopes-molina"
        }
    }

    const pegarUsuarios = ()=> {
        axios.get(url, headers )
        .then((res)=>{
            setUsuarios(res.data)
        })
        .catch((err)=>{
            alert(err.message)
        })
    }       

    const deletarUsuario = (id, name)=>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        switch (window.confirm(`tem certeza que deseja deletar ${name}`)) {
            case true:
                axios.delete(url, headers)
                .then((res)=>{
                    alert(`Usuario ${name} deletado com sucesso`)
                    pegarUsuarios()
                }).catch((err)=>{
                    alert(err.message)
                })
                break;
            case false:
                pegarUsuarios()
                break
            default:
                alert('Algo inesperado aconteceu')
                break;
        }        
    }

    const mostrarDetalhes = ()=>{
        console.log('Mostrou detalhes')
    }

    

    const usuariosRenderizados = usuarios.map(({id, name, email})=>{
        return(
            <ConatinerItem key={id}>
                <Item onClick={()=>mostrarDetalhes(id, name)}>{name}</Item>
                <ContainerIcon onClick={()=>deletarUsuario(id, name)}>
                    <FaWindowClose/>
                </ContainerIcon>
            </ConatinerItem>  
        )
    })

    return (
        <ContainerLista>
            <h1>{modal ? 'Lista de usuarios':'Detalhes do usuario'}</h1>
            {modal ? usuariosRenderizados:<Detalhes/>}
        </ContainerLista>
    )
}

export default ListaDeUsuarios

