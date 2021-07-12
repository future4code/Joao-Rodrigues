import React from 'react'
import Button from '../../components/button/Button'
import axios from 'axios'
import {Title, ContainerForm} from './styled'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'

const planetsList = ['Mercurio', 'Venus', 'Marte', 'Jupter', 'Saturno', 'Netuno', 'Urano', 'Plutao']

const CreateTrip = () => {
    // const [valueName, setValueName] = React.useState('')
    // const [valuePlanet, setValuePlanet] = React.useState('')
    // const [valueDate, setValueDate] = React.useState('')
    // const [valueDescription, setValueDescription] = React.useState('')
    // const [valueDuration, setValueDuration] = React.useState('')
    const {form, onChange, cleanFields} = useForm({
        name:'',
        planet:'', 
        date:'',
        description:'',
        duration:''
    })
    const history = useHistory()
    const token = localStorage.getItem('token')

    React.useEffect(()=>{
        if(token === null){
            history.push('/loginpage')
        }
    },[])

    const createTrip = ((event)=>{
        event.preventDefault()

        const body ={
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.duration 
        }

        const headers = {
            headers: {
                auth: token
            }
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/joaopedro-lopes-molina/trips', body, headers)
        .then((res)=>{
            console.log(res)
            alert('Viagem criada com sucesso!')
        }).catch((err)=>{
            alert('Algo deu errado!')
            console.log(err)
        })

        cleanFields()
    })

    return (
        <div>
            <Title>Criar Viagem</Title>
            <ContainerForm onSubmit={createTrip}>
                <input
                    placeholder='Nome'
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={onChange}
                    pattern='^.{5,}'
                    title='Nome deve ter no min 5 letras'
                    required
                />
                <select name='planet' value={form.planet} onChange={onChange} required>
                    <option value='' disabled>Selecione um planeta</option>
                    {planetsList.map((planet)=>{
                        return(
                            <option key={planet} value={planet}>{planet}</option>
                        )
                    })}
                </select>
                <input
                    type='date'
                    name='date'
                    value={form.date}
                    onChange={onChange}
                    required
                />
                <input
                    placeholder='Descriçao'
                    type='text'
                    name='description'
                    value={form.description}
                    onChange={onChange}
                    pattern='^.{30,}'
                    title='Deve ter no min 30 letras'
                    required
                />
                <input
                    placeholder='Duração em dias'
                    type='number'
                    name='duration'
                    min='50'
                    value={form.duration}
                    onChange={onChange}
                    required
                />

                <div>
                    <Button
                        onClick={()=>history.goBack()}
                        name='Voltar'
                        color='#0B3D92'
                    />
                    <Button
                        name='Criar'
                        color='#FF301B'
                    />
                </div>
            </ContainerForm>
        </div>
    )
}

export default CreateTrip
