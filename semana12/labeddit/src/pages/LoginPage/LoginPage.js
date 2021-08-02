import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../../components/Button/Button'
import { Container, Form } from '../../Styles/styledForm/styledForm'
import { ContainerBtn } from './styled'
import axios from 'axios'
import {urlBase} from '../../constants/urls'
import useForm from '../../hooks/useForm'
import { useUnprotectedPage } from '../../hooks/useUnprotectedPage'

const LoginPage = () => {
    useUnprotectedPage()
    const {form, onChange, cleanFields} = useForm({
        email:'',
        password:'',
    })

    const history = useHistory()

    const onSubmitLogin = ((event) =>{
        event.preventDefault()

        const body ={
            email: form.email,
            password: form.password
        }

        axios.post(`${urlBase}/users/login`, body)
        .then((res)=>{
            localStorage.setItem('token', res.data.token)
            history.push('/')
        }).catch((err)=>{
            console.log(err)
            alert('Erro! Algum problema com email ou senha.')
            cleanFields()
        })

    })

    return (
        <Container>
            <h1>labEddit</h1>
            <Form onSubmit={onSubmitLogin}>
                <input
                    placeholder='Email'
                    type='email'
                    name='email'
                    onChange={onChange}
                    value={form.email}
                    required
                />

                <input
                    placeholder='Senha'
                    type='password'
                    name='password'
                    value={form.password}
                    onChange={onChange}
                    required
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
                        type='submit'
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
