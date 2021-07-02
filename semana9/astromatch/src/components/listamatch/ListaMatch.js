import React from 'react'
import styled from 'styled-components'

const MatchList = styled.div`
    max-width: 25vw;
    width: 100%;
    margin: 30px auto;
    box-shadow: 0 4px 8px 2px rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;

    :hover{
        box-shadow: 0 8px 16px 2px rgba(0,0,0,0.2);
    }
`

const ContainerList = styled.ul`
    display: flex;
    flex-direction: column;
`

const ItemList = styled.li`
    list-style: none;
    color: #d63031;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px 20px;
    transition: 0.3s;
    border-radius: 3px;

    :hover{
        background-color: #d63031;
        color: #fbfbfb;
    }

    img{
        max-width: 40px;
        width: 40px;
        height: 40px;
        border-radius: 100%;
    }

    span{
        margin-left: 10px;
        font-size: 1.125em;
    }
`

const ListaMatch = () => {
    return (
        <MatchList>
            <ContainerList>
                <ItemList>
                    <img src='https://midia.gruposinos.com.br/_midias/jpg/2021/03/09/arz_21_in_campanha_instagram2-19500888.jpg'/>
                    <span>Nome</span>
                </ItemList>

                <ItemList>
                    <img src='https://midia.gruposinos.com.br/_midias/jpg/2021/03/09/arz_21_in_campanha_instagram2-19500888.jpg'/>
                    <span>Nome</span>
                </ItemList>

                <ItemList>
                    <img src='https://midia.gruposinos.com.br/_midias/jpg/2021/03/09/arz_21_in_campanha_instagram2-19500888.jpg'/>
                    <span>Nome</span>
                </ItemList>
            </ContainerList>
        </MatchList>
    )
}

export default ListaMatch
