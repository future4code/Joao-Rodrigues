import React from 'react'
import styled from 'styled-components'
import {FaHeart, FaHeartBroken} from 'react-icons/fa'

const Card = styled.div`
    max-width: 340px;
    /* width: 100%; */
    margin: 0 auto;
    box-shadow: 0 4px 8px 2px rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;

    :hover{
        box-shadow: 0 8px 16px 2px rgba(0,0,0,0.2)
    }

    /* @media(max-width: 768px){
        max-width: 25vw;
    }

    @media(max-width: 420px){
        max-width: 25vw;
    } */
`

const ContainerImg = styled.div`
    max-width: 100%;
    height: 350px;
    background-image: url(${({url})=>url});
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    border-radius: 5px 5px 0 0;
    display: flex;
    align-items: flex-end;
`

const ContainerDescription = styled.div`
    width: 100%;
    padding: 10px 15px;
    height: 110px;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4));
`

const ContainerIcon = styled.div`
    border-radius: 0 0 5px 5px;
    display: flex;
    justify-content: center;
`

const IconButton = styled.span`
    color: #d63031;
    font-size: 2.25em;
    margin: 10px 30px;
    cursor: pointer;
    transition: 0.3s;

    :hover{
        opacity: 0.9;
    }

`

const CardPerfil = ({id, age, name, bio, photo, onClick1, onClick2}) => {
    return (
        <Card key={id}>
            <ContainerImg url={photo}>
                <ContainerDescription>
                    <h3>{name}, <span>{age} anos</span></h3>
                    <p>{bio}</p>
                </ContainerDescription>
            </ContainerImg>
            
            <ContainerIcon>
                <IconButton onClick={onClick1}><FaHeartBroken/></IconButton>
                <IconButton onClick={onClick2}><FaHeart/></IconButton>
            </ContainerIcon>
        </Card>
    )
}

export default CardPerfil
