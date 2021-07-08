import React from 'react'
import Button from '../../components/button/Button'
import axios from 'axios'
import {Title, ContainerForm} from './styled'

const planetsList = ['Mercurio', 'Venus', 'Marte', 'Jupter', 'Saturno', 'Netuno', 'Urano', 'Plutao']

const CreateTrip = () => {
    const [valueName, setValueName] = React.useState('')
    const [valuePlanet, setValuePlanet] = React.useState('')
    const [valueDate, setValueDate] = React.useState('')
    const [valueDescription, setValueDescription] = React.useState('')
    const [valueDuration, setValueDuration] = React.useState('')

    const createTrip = (()=>{
        const body ={
            name: valueName,
            planet: valuePlanet,
            date: valueDate,
            description: valueDescription,
            durationInDays: valueDuration 
        }

        const headers = {
            headers: {
                auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkNmbjZPd0YyOVU5TDJSYzV0UWo1IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1NzMxNDM4Njh9.mmOrfGKlXpE3pIDUZfS3xV5ZwttOI2Exmoci9Sdsxjs'
            }
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/joaopedro-lopes-molina/trips', body, headers)
        .then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    })

    return (
        <div>
            <Title>Criar Viagem</Title>
            <ContainerForm onSubmit={(event)=>event.preventDefault()}>
                <input
                    placeholder='Nome'
                    type='text'
                    value={valueName}
                    onChange={(event)=>setValueName(event.target.value)}
                />
                <select value={valuePlanet} onChange={(event)=>setValuePlanet(event.target.value)}>
                    <option value='' disabled>Selecione um planeta</option>
                    {planetsList.map((planet)=>{
                        return(
                            <option key={planet} value={planet}>{planet}</option>
                        )
                    })}
                </select>
                <input
                    type='date'
                    value={valueDate}
                    onChange={(event)=>setValueDate(event.target.value)}
                />
                <input
                    placeholder='Descriçao'
                    type='text'
                    value={valueDescription}
                    onChange={(event)=>setValueDescription(event.target.value)}
                />
                <input
                    placeholder='Duração em dias'
                    type='number'
                    min='50'
                    value={valueDuration}
                    onChange={(event)=>setValueDuration(event.target.value)}
                />

                <div>
                    <Button
                        name='Voltar'
                        color='#0B3D92'
                    />
                    <Button
                        name='Criar'
                        color='#FF301B'
                        onClick={()=>createTrip()}
                    />
                </div>
            </ContainerForm>
        </div>
    )
}

export default CreateTrip
