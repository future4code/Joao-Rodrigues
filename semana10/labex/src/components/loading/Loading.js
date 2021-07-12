import React from 'react'
import Lottie from 'react-lottie'
import rocket from '../../assets/rocket.json'
import styled from 'styled-components'

const LoadingText = styled.h2`
    margin-top: 20px;
    text-align: center;
`

const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: rocket,
    }

    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={300}
                width={200}
            />

            <LoadingText>Carregando...</LoadingText>
        </div>
    )
}

export default Loading
