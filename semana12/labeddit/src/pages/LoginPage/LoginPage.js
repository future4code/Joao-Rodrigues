import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../../components/Button/Button'
import { Container, Form } from '../../Styles/styledForm/styledForm'
import { ContainerBtn } from './styled'


const LoginPage = () => {
    const history = useHistory()

    return (
        <Container>
            <h1>labEddit</h1>
            <Form>
                <input
                    placeholder='Email'
                    type='email'
                />

                <input
                    placeholder='Senha'
                    type='password'
                />

                <ContainerBtn>
                    <Button
                        title='Entrar'
                        bgcolor='#9147FF'
                        color='white'
                        width='45%'
                        border='none'
                        bgcolorHover='rgba(145, 71, 255, 0.9)'
                        shadow='2px 3px 3px rgba(0, 0, 0, 0.3)'
                    />

                    <Button
                        title='Cadastrar'
                        bgcolor='#F7F7F8'
                        color='#9147FF'
                        width='45%'
                        border='1px solid #9147FF'
                        shadow='2px 3px 3px rgba(0, 0, 0, 0.3)'
                        onClick={()=>history.push('/cadastrar')}
                    />
                </ContainerBtn>
            </Form>
        </Container>
    )
}

export default LoginPage
