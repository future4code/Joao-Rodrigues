import React from 'react'
import Button from '../../components/Button/Button'
import { Container, Form } from '../../Styles/styledForm/styledForm'


const SignupPage = () => {
    return (
        <Container>
            <h1>Cadastro</h1>
            <Form>
                <input
                    placeholder='Nome'
                    type='text'
                />

                <input
                    placeholder='Email'
                    type='email'
                />

                <input
                    placeholder='Senha'
                    type='password'
                />

                <Button
                    title='Cadastrar'
                    bgcolor='#9147FF'
                    color='white'
                    width='100%'
                    border='none'
                    bgcolorHover='rgba(145, 71, 255, 0.9)'
                    shadow='2px 3px 3px rgba(0, 0, 0, 0.3)'
                />
            </Form>
        </Container>
    )
}

export default SignupPage
