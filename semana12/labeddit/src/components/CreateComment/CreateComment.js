import React from 'react'
import {ContainerCreateComment, ContainerForm} from './styled'

const CreateComment = ({onSubmit, value, onChange}) => {
    return (
        <ContainerCreateComment>            
            <ContainerForm onSubmit={onSubmit}>
                <textarea
                    placeholder='Texto do seu comentario'
                    name='body'
                    value={value}
                    onChange={onChange}
                />

                <button type='submit'>Comentar</button>
            </ContainerForm>
        </ContainerCreateComment>
    )
}

export default CreateComment
