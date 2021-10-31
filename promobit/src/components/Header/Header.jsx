import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderContainer } from './styled'

const Header = () => {
    return (
        <HeaderContainer>
            <Link to={'/'}><span>$ Promobit</span></Link>
        </HeaderContainer>
    )
}

export default Header
