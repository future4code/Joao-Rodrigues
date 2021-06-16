import React from 'react'
import styled from 'styled-components'
import facebook from '../../img/facebook.svg'
import instagram from '../../img/instagram.svg'
import twitter from '../../img/twitter.svg'


const ContainerIcones = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
`

const IconeImg = styled.img`
    width: 27px;
    cursor: pointer;
    margin-right: 15px;
`

export class SecaoCompartilhar extends React.Component{
    state ={
        
    }

    render(){
        return(
            <ContainerIcones>
                <IconeImg
                    alt={'Icone'}
                    src={instagram}
                />

                <IconeImg
                    alt={'Icone'}
                    src={facebook}
                />

                <IconeImg
                    alt={'Icone'}
                    src={twitter}
                />
            </ContainerIcones>
        )
    }
}