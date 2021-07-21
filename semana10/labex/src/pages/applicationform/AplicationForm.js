import React from 'react'
import axios from 'axios'
import { GlobalContext } from '../../components/globalcontext/GlobalContext'
import Footer from '../../components/footer/Footer'
import {Title, ContainerForm} from './styled'
import Button from '../../components/button/Button'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'

const countryList = [
    'África do Sul', 
    'Alemanha', 
    'Argentina', 
    'Australia', 
    'Brasil', 
    'Bélgica', 
    'Bolívia',
    'Camarões',
    'Camboja', 
    'Canadá', 
    'Catar ',
    'Chile',
    'China', 
    'Colômbia',
    'Coreia do Sul',
    'Cuba',
    'Dinamarca',
    'Egito',
    'Equador',
    'Espanha',
    'EUA',
    'Finlândia',
    'França',
    'Gana',
    'Geórgia',
    'Grécia', 
    'Haiti',
    'Holanda',
    'India', 
    'Inglaterra',
    'Irã ',
    'Iraque',
    'Irlanda',
    'Israel', 
    'Itália',
    'Jamaica',
    'Japão',
    'Jordânia',
    'Kosovo',
    'Kuwait',
    'Líbano',
    'Lituânia',
    'Luxemburgo',
    'Malásia',
    'Marrocos',
    'México',
    'Moçambique',
    'Mônaco',
    'Mongólia',
    'Nicarágua',
    'Nigéria',
    'Noruega',
    'Nova Zelândia',
    'Omã',
    'País de Gales',
    'Panamá',
    'Paquistão',
    'Paraguai',
    'Peru',
    'Polônia',
    'Portugal',
    'Quênia',
    'Quirguistão',
    'Reino Unido',
    'República do Congo',
    'República Dominicana',
    'República Tcheca',
    'Romênia',
    'Russia',
    'Salomão',
    'San Marino',
    'Senegal',
    'Sérvia',
    'Singapura ',
    'Síria',
    'Sudão',
    'Suécia',
    'Suíça',
    'Tailândia',
    'Taiwan',
    'Timor-Leste', 
    'Turquia',
    'Ucrânia',
    'Uganda',
    'Uruguai',
    'Uzbequistão',
    'Vaticano',
    'Venezuela',
    'Vietnã ',
    'Zâmbia',
    'Zimbábue',
]

const AplicationForm = () => {
    const {form, onChange, cleanFields} = useForm({
        trip: '',
        name:'',
        age: 0,
        profession:'',
        textArea:'',
        country:'',
    })
    const global = React.useContext(GlobalContext)
    const history = useHistory()

    console.log(form)

    const onClickSend = ((event)=>{
        event.preventDefault()

        const body = {
            name:form.name,
            age: form.age,
            applicationText: form.textArea,
            profession: form.profession,
            country: form.country
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/joaopedro-lopes-molina/trips/${form.trip}/apply`, body)
        .then((res)=>{
            alert('Inscrição enviada com sucesso!')
        }).catch((err)=>{
            alert('Algo deu errado!')
            console.log(err)
        })

        cleanFields()
    })

    return (
        <div>
            <Title>Inscreva-se para uma viagem</Title>
            <ContainerForm onSubmit={onClickSend}>
                <select value={form.trip} onChange={onChange} name='trip' required>
                    <option value='' disabled>Escolha uma viagem</option>
                    {global.tripsList.map(({id, name})=>{
                        return(
                            <option key={id} value={id}>{name}</option>
                        )
                    })}
                </select>

                <input
                    type='text'
                    placeholder='Nome'
                    name='name'
                    value={form.name}
                    onChange={onChange}
                    pattern='^.{3,}'
                    title='Deve ter no min 3 letras'
                    required
                />

                <input
                    type='number'
                    placeholder='Idade'
                    name='age'
                    min='18'
                    value={form.age}
                    onChange={onChange}
                    required
                />

                <input
                    type='text'
                    placeholder='Profissão'
                    name='profession'
                    value={form.profession}
                    onChange={onChange}
                    pattern='^.{10,}'
                    title='Deve ter no min 10 letras'
                    required
                />

                <select value={form.country} onChange={onChange} name='country' required>
                    <option value='' disabled>País de origem</option>
                    {countryList.map((country)=>{
                        return(
                            <option key={country} value={country}>{country}</option>
                        )
                    })}
                </select>

                <textarea 
                    placeholder='Texto de Candidatura'
                    value={form.textArea}
                    name='textArea' 
                    onChange={onChange}
                    pattern='^.{30,}'
                    title='Deve ter no min 30 letras'
                    required
                />

                <div>
                    <Button
                        onClick={()=>history.goBack()}
                        name='Voltar'
                        color='#0B3D92'
                        type='submit'
                    />
                    <Button
                        name='Enviar'
                        color='#FF301B'
                        type='submit'
                    />
                </div> 
            </ContainerForm>
            <Footer/>
        </div>
    )
}

export default AplicationForm
