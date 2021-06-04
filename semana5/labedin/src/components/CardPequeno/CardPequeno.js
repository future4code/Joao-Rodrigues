import React from 'react';
import styled from 'styled-components'

const LittleCard = styled.div`
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 70px;
    display: flex;
    width: 40vw;
`;

const ItemP = styled.p`
    margin-right: 5px;
`

const ItemH4 = styled.h4`
    margin-right: 5px;
`

function CardPequeno(props){
    return(
        <LittleCard className="littlecard-container">
            <ItemH4 className="item">{props.tituloInfo}</ItemH4>
            <ItemP className="item">{props.info}</ItemP>
        </LittleCard>
    )
}

export default CardPequeno