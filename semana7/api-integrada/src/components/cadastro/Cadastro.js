import axios from 'axios'
import React from 'react'
import styled from 'styled-components'

const ContainerCadastro = styled.div`
    border: 1px solid #9B9D9C;
    padding: 30px 10px;
    width: 350px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        width: 70%;
        margin-bottom: 10px;
        padding: 5px;
        outline: none;
    }

    button{
        padding: 5px 10px;
        cursor: pointer;
    }
`

const Cadastro = () => {
    const [valueNome, setNome] = React.useState('')
    const [valueEmail, setEmail] = React.useState('')

    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

    const headers = {
        headers:{
            Authorization: "joaopedro-lopes-molina"
        }
    }

    const criarUsuario = ()=> {
        const body = {
            name: valueNome,
            email: valueEmail
        }

        axios.post(url, body, headers)
        .then((res)=>{
            alert(`Usuario(a) ${valueNome} cadastrado(a) com sucesso!`)
            setNome('')
            setEmail('')
        })
        .catch((err)=>{
            alert(err.response.data.message)
            setNome('')
            setEmail('')
        })
    }

    return (
        <ContainerCadastro>
            <input placeholder='Seu nome' onChange={(e)=>setNome(e.target.value)} value={valueNome}/>
            <input placeholder='Seu email' onChange={(e)=>setEmail(e.target.value)} value={valueEmail}/>
            <button onClick={criarUsuario}>Salvar</button>
        </ContainerCadastro>
    )
}

export default Cadastro
