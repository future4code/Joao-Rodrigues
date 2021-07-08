import React from 'react'
import {ContainerFormLogin, Title} from './styled'
import Button from '../../components/button/Button'



const LoginPage = () => {
    const handleSubmit = ((event)=>{
        event.preventDefault()
    })

    return (
        <div>
            <Title>Login</Title>
            <ContainerFormLogin onSubmit={handleSubmit}>
                <input
                    type='email'
                    placeholder='E-mail'

                />

                <input
                    type='password'
                    placeholder='Senha'
                    
                />

                <div>
                    <Button
                        name='Voltar'
                        color='#0B3D92'
                    />

                    <Button
                        name='Entrar'
                        color='#FF301B'
                    />
                </div>
            </ContainerFormLogin>
        </div>
    )
}

export default LoginPage
