import React from 'react'
import CardPerfil from '../cardperfil/CardPerfil'
import styled from 'styled-components'
import axios from 'axios'
import { GlobalContext } from '../globalcontext/GlobalContext'

const Warning = styled.h2`
    color: #333;
    text-align: center;
`

const BtnReset = styled.button`
    padding: 5px 10px;
    cursor: pointer;
    display: block;
    margin: 20px auto;
    border-radius: 5px;
    border: 1px solid #d63031;
    color: #d63031;
    background-color: transparent;
    transition: 0.3s;

    :hover{
        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
    }
`

const TelaInicial = () => {
    const global = React.useContext(GlobalContext)

    const [profile, setProfile] = React.useState({})
    const [match, setMatch] = React.useState(true)

    React.useEffect(()=>{
        pegaProfile()
    },[global.next])

    const pegaProfile = (()=>{
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joaopedro/person')
        .then((res)=>{
            setProfile(res.data.profile)
        }).catch((err)=>{
            console.log(err.message)
        })
    })

    const onClickMatch = ((idProfile, isMatch)=>{
        const body = {
            id: idProfile,
            choice: isMatch
        }

        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joaopedro/choose-person', body)
        .then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err.message)
        })

        console.log(isMatch)

        global.setNext(global.next + 1)
    })

    console.log(profile)

    const reset = (()=>{
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joaopedro/clear')
        .then((res)=>{
            console.log(res.data)
        }).catch((err)=>{
            console.log(err.message)
        })

        global.setNext(global.next + 1)
    })

    if(profile === null) return (
        <>
            <Warning>Não há mais perfis disponiveis</Warning>
            <BtnReset onClick={reset}>Resetar Perfis e Matches</BtnReset>
        </>
    )
     
    return (
        <div>
            <CardPerfil
                key={profile.id}
                name={profile.name}
                age={profile.age}
                bio={profile.bio}
                photo={profile.photo}
                onClick1={()=>onClickMatch(profile.id, !match)}
                onClick2={()=>onClickMatch(profile.id, match)}
            />
        </div>
    )
}

export default TelaInicial
