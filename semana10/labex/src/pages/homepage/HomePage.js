import React from 'react'
import Button from '../../components/button/Button'
import {ContainerMain} from './styled'



const HomePage = () => {
    return (
        <ContainerMain>
            <div>
                <h1>LabeX</h1>
            </div>
            
            <div>
                <Button
                    name='Ver Viagens'
                    color='#FF301B'
                />
                <Button
                    name='Area de Admin'
                    color='#0B3D92'
                />
            </div>
            
        </ContainerMain>
    )
}

export default HomePage
