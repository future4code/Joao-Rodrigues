import React from 'react'
import {ContainerCreateComment, ContainerForm} from './styled'

const CreateComment = () => {
    return (
        <ContainerCreateComment>            
            <ContainerForm>
                <textarea
                    placeholder='Texto do seu comentario'
                />

                <button type='submit'>Comentar</button>
            </ContainerForm>
        </ContainerCreateComment>
    )
}

export default CreateComment
