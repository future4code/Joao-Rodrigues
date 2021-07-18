import React from 'react'
import styled from 'styled-components'
import Button from '../button/Button'

const ContainerCadidate = styled.div`
    width: 400px;
    margin: 0 auto 20px auto;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    padding: 20px;
    color: #1a1d1a;
    box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
    text-align: left;

    span{
        font-weight: bold;
    }
`

const ContainerBtn = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
`

const CardCandidates = ({name, profession, age, country, applicationText, onClickApproved, onClickReproved}) => {
    return (
        <ContainerCadidate>
            <p><span>Nome: </span>{name}</p>
            <p><span>Profissão: </span>{profession}</p>
            <p><span>Idade: </span>{age} anos</p>
            <p><span>País: </span>{country}</p>
            <p><span>Texto de candidatura: </span>{applicationText}</p>

            <ContainerBtn>
                <Button
                    onClick={onClickApproved}
                    name='Aprovar'
                    color='#FF301B'
                />
                <Button
                    onClick={onClickReproved}
                    name='Reprovar'
                    color='#0B3D92'
                />
            </ContainerBtn>
        </ContainerCadidate>
    )
}

export default CardCandidates
