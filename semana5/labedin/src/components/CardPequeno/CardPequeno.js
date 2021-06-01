import React from 'react';
import './CardPequeno.css'
import styled from 'styled-components'

function CardPequeno(props){
    return(
        <div className="littlecard-container">

            <h4 className="item">{props.tituloInfo}</h4>
            <p className="item">{props.info}</p>
        </div>
    )
}

export default CardPequeno