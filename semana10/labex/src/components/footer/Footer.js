import React from 'react'
import {ContainerFooter, ContainerSocialMedias, Icon} from './styled'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'

const Footer = () => {
    return (
        <ContainerFooter>
            <ContainerSocialMedias>
                <a href='https://www.facebook.com/' target='_blank' rel="noreferrer"><Icon><FaFacebook/></Icon></a>
                <a href='https://www.instagram.com/' target='_blank' rel="noreferrer"><Icon><FaInstagram/></Icon></a>
                <a href='https://twitter.com/' target='_blank' rel="noreferrer"><Icon><FaTwitter/></Icon></a>
            </ContainerSocialMedias>
            <p>Copyright 2021. All Rights Reserved.</p>
        </ContainerFooter>
    )
}

export default Footer
