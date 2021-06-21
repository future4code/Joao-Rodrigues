import React from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'

const ContainerHeader = styled.header`
    border-bottom: thin solid #E7E9EB;
    border-bottom-width: thin;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #040505;
`

const ContainerNav = styled.nav`
    padding: 25px 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5);
`

const Logo = styled.div`
    color: white;
    font-weight: bold;
    font-size: 1.75em;
    transition: all.3s;
    cursor: default;

    :hover{
        color: #2196F3;
    }
`

const ContainerPesquisa = styled.div`
    max-width: 100%;
    width: 300px;
    display: flex;
    align-items: center;

    input{
        padding: 10px 15px;
        font-size: .85em;
        outline: none;
        border: 1px solid #E7E9EB;
        width: 80%;
        border-radius: 25px 0 0 25px;
    }

    button{
        width: 20%;
        background: #2196F3;
        border: none;
        font-size: .85em;
        padding: 10px 15px;
        border-radius: 0 25px 25px 0;
        text-align: center;
        cursor: pointer;
        color: white;
        transition: 0.3s;

        :hover {
            background: #0b7dda;
        }
    }   
`

const Header = () => {
    return (
        <ContainerHeader>
            <ContainerNav>
                <Logo>
                    LabeFy
                </Logo>

                <ContainerPesquisa>
                    <input 
                        type='text'
                        placeholder='Pesquisar...'
                    />
                    <button><FaSearch/></button>
                </ContainerPesquisa>
            </ContainerNav>    
        </ContainerHeader>
    )
}

export default Header
