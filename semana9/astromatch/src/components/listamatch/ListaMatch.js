import React from 'react'
import styled from 'styled-components'

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

const ListaMatch = ({id, name, photo}) => {
    return (
        <ItemList>
            <img src={photo} alt='imagem'/>
            <span>{name}</span>
        </ItemList>
    )
}

export default ListaMatch
