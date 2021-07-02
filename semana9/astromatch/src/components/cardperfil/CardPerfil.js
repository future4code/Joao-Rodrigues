import React from 'react'
import styled from 'styled-components'
import {FaHeart, FaHeartBroken} from 'react-icons/fa'

const Card = styled.div`
    max-width: 25vw;
    width: 100%;
    margin: 0 auto;
    box-shadow: 0 4px 8px 2px rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;

    :hover{
        box-shadow: 0 8px 16px 2px rgba(0,0,0,0.2)
    }
`

const ContainerImg = styled.div`
    max-width: 100%;
    height: 350px;
    display: inline-block;
    position: relative;

    img{
        max-width: 100%;
        border-radius: 5px 5px 0 0;
    }
`

const ContainerDescription = styled.div`
    position: absolute;
    bottom: 30px;
    left: 20px;

    p{
        font-size: 1em;
    }
`

const ContainerIcon = styled.div`
    border-radius: 0 0 5px 5px;
    display: flex;
    justify-content: center;
`

const IconButton = styled.span`
    color: #d63031;
    font-size: 2.25em;
    margin: 10px 20px;
    cursor: pointer;
    transition: 0.3s;

    :hover{
        opacity: 0.9;
    }

`

const CardPerfil = () => {
    return (
        <Card>
            <ContainerImg>
                <img src='https://midia.gruposinos.com.br/_midias/jpg/2021/03/09/arz_21_in_campanha_instagram2-19500888.jpg' 
                alt='imagem do perfil'/>
                <ContainerDescription>
                    <h3>Bruna Marquezine</h3>
                    <p>26 anos, atriz, alta, bonita, magra</p>
                </ContainerDescription>
            </ContainerImg>
            
            <ContainerIcon>
                <IconButton><FaHeartBroken/></IconButton>
                <IconButton><FaHeart/></IconButton>
            </ContainerIcon>
        </Card>
    )
}

export default CardPerfil
