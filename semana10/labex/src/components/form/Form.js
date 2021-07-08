import React from 'react'
import Button from '../button/Button'
import {ContainerForm} from './styled'

const Form = ({
    onSubmit, 
    valueSelect, 
    setValueSelect, 
    options, 
    valueInputNome, 
    setValueInputNome, 
    valueInputAge,
    setValueInputAge,
    valueInputProfession,
    setValueInputProfession,
    valueTextArea,
    setValueTextArea,
    onClickSend,
    }) => {
  
    return (
        <ContainerForm onSubmit={onSubmit}>
            <select value={valueSelect} onChange={(event)=>setValueSelect(event.target.value)}>
                <option value='' disabled>Escolha uma viagem</option>
                {options.map(({id, name})=>{
                    return(
                        <option key={id} value={name}>{name}</option>
                    )
                })}
            </select>

            <input
                type='text'
                placeholder='Nome'
                value={valueInputNome}
                onChange={(event)=>setValueInputNome(event.target.value)}
                required
            />

            <input
                type='number'
                placeholder='Idade'
                min='18'
                value={valueInputAge}
                onChange={(event)=>setValueInputAge(event.target.value)}
                required
            />

            <input
                type='text'
                placeholder='Profissão'
                value={valueInputProfession}
                onChange={(event)=>setValueInputProfession(event.target.value)}
            />

            <textarea 
                placeholder='Texto de Candidatura'
                maxLength='300' 
                value={valueTextArea} 
                onChange={(event)=>setValueTextArea(event.target.value)}
            />

            <div>
                <Button
                    name='Voltar'
                    color='#0B3D92'
                />
                <Button
                    onClick={onClickSend}
                    name='Enviar'
                    color='#FF301B'
                />
            </div>
            
        </ContainerForm>
    )
}

export default Form
