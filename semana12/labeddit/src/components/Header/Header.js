import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {ContainerHeader, ContainerContent, LogoutBtn, ContainerSeacrch} from './styled'
import {BiSearchAlt2} from 'react-icons/bi'

const Header = () => {
    return (
        <ContainerHeader>
            <ContainerContent>
                <Link to={'/'}>
                    <span>labEddit</span>
                </Link>

                <ContainerSeacrch>
                    <input
                        type='text'
                        placeholder='Pesquisar...'
                    />
                    <button type='submit'><BiSearchAlt2/></button>
                </ContainerSeacrch>

                <LogoutBtn>Logout</LogoutBtn>
            </ContainerContent>
        </ContainerHeader>
    )
}

export default Header
