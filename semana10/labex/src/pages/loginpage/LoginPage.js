import React from 'react'
import {ContainerFormLogin, Title} from './styled'
import Button from '../../components/button/Button'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import useForm from '../../hooks/useForm'



const LoginPage = () => {
    const {form, onChange, cleanFields} = useForm({
        email:'',
        password:''
    })
    const history = useHistory()

    const login = (event)=>{
        event.preventDefault()

        const body = {
            email: form.email,
            password: form.password
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/joaopedro-lopes-molina/login', body)
        .then((res)=>{
            console.log(res.data)
            localStorage.setItem('token', res.data.token)
            history.push('/adminhomepage')
        }).catch((err)=>{
            console.log(err)
            alert('Email ou/e senha incorreto(s)')
            cleanFields()
        })       
    }

    return (
        <div>
            <Title>Login</Title>
            <ContainerFormLogin onSubmit={login}>
                <input
                    type='email'
                    placeholder='E-mail'
                    name='email'
                    onChange={onChange}
                    value={form.email}
                    required
                />

                <input
                    type='password'
                    placeholder='Senha'
                    name='password'
                    onChange={onChange}
                    value={form.password}
                    required
                />

                <div>
                    <Button
                        onClick={()=>history.push('/')}
                        name='Voltar'
                        color='#0B3D92'
                    />

                    <Button
                        name='Entrar'
                        color='#FF301B'
                        type='submit'
                    />
                </div>
            </ContainerFormLogin>
        </div>
    )
}

export default LoginPage
