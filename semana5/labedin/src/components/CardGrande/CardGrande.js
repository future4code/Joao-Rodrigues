import React from 'react';
import './CardGrande.css'
import styled from 'styled-components'

const bigcard = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`;

const bigcardImg = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`;

const bigcardH4 = styled.h4`
    margin-bottom: 15px;
`;

const bigcardDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`


function CardGrande(props) {
    return (
        <bigcard>
            <bigcardImg src={ props.imagem } />
            <bigcardDiv>
                <bigcardH4>{ props.nome }</bigcardH4>
                <p>{ props.descricao }</p>
            </bigcardDiv>
        </bigcard>
    )
}

export default CardGrande;