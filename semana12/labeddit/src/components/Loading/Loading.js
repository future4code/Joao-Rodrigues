import React from 'react'
import styled from 'styled-components'
import Lottie from 'react-lottie'
import loading from '../../assets/loading.json'

const LoadTitle = styled.h2`
    margin-bottom: 10px;
    text-align: center;
    color: #65676B;
`

const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loading
    }

    return (
        <div>
            <Lottie options={defaultOptions} width={200} height={200}/>
            <LoadTitle>Carregando</LoadTitle>
        </div>
    )
}

export default Loading
