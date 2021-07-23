import React from 'react'
import Button from '../../components/Button/Button'
import { Container, Form } from '../../Styles/styledForm/styledForm'
import axios from 'axios'
import {urlBase} from '../../constants/Constants'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router'


const SignupPage = () => {
    const {form, onChange} = useForm({
        username:'',
        email:'',
        password:'',
    })
    const history = useHistory()

    const onSubmitSignup= ((event) =>{
        event.preventDefault()
        const body ={
            username: form.username,
            email: form.email,
            password: form.password
        }

        axios.post(`${urlBase}/users/signup`, body)
        .then((res)=>{
            localStorage.setItem('token', res.data.token)
            alert('Cadastro realizado com sucesso!')
            history.push('/')
        })
        .catch((err)=>{
            console.log(err)
        })
    })

    return (
        <Container>
            <h1>Cadastro</h1>
            <Form onSubmit={onSubmitSignup}>
                <input
                    placeholder='Nome'
                    type='text'
                    name='username'
                    value={form.username}
                    onChange={onChange}
                    required
                />

                <input
                    placeholder='Email'
                    type='email'
                    name='email'
                    value={form.email}
                    onChange={onChange}
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
