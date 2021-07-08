import React from 'react'
import axios from 'axios'
import Form from '../../components/form/Form'
import { GlobalContext } from '../../components/globalcontext/GlobalContext'
import Footer from '../../components/footer/Footer'
import {Title} from './styled'

const AplicationForm = () => {
    const [select, setSelect] = React.useState('')
    const [inputName, setInputName] = React.useState('')
    const [inputAge, setInputAge] = React.useState('')
    const [inputProfession, setInputProfession] = React.useState('')
    const [textArea, setTextArea] = React.useState('')
    const global = React.useContext(GlobalContext)

    const handleSubmit = (event)=>{
        event.preventDefautl()
    }

    const onClickSend = (()=>{
        const body = {
            name: select,
            age: inputAge,
            applicationText: textArea,
            profession: inputProfession,
            country:''
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/joaopedro-lopes-molina/trips/:id/apply', body)
        .then((res)=>{
            console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })

        setSelect('')
        setInputName('')
        setInputAge('')
        setInputProfession('')
        setTextArea('')
    })
 

    return (
        <div>
            <Title>Inscreva-se para uma viagem</Title>
            <Form
                onSubmit={handleSubmit}
                valueSelect={select}
                setValueSelect={setSelect}
                options={global.tripsList}

                valueInputNome={inputName}
                setValueInputNome={setInputName}

                valueInputAge={inputAge}
                setValueInputAge={setInputAge}

                valueInputProfession={inputProfession}
                setValueInputProfession={setInputProfession}
                
                valueTextArea={textArea}
                setValueTextArea={setTextArea}

                onClickSend={onClickSend}
            />
            <Footer/>
        </div>
    )
}

export default AplicationForm
