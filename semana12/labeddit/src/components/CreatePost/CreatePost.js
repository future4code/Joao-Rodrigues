import React from 'react'
import {ContainerCreatePost, ContainerTitle, ContainerForm} from './styled'

const CreatePost = ({valueTitle, onChangeTitle, valueBody, onChangeBody, onClick}) => {
    return (
        <ContainerCreatePost>
            <ContainerTitle>
                <h3>Criar Post</h3>
            </ContainerTitle>
            
            <ContainerForm onSubmit={(event)=>event.preventDefault()}>
                <input
                    type='text'
                    name='title'
                    placeholder='Titulo'
                    value={valueTitle}
                    onChange={onChangeTitle}
                    required
                />

                <textarea
                    placeholder='Texto do seu post'
                    name='body'
                    value={valueBody}
                    onChange={onChangeBody}
                />

                <button onClick={onClick}>Postar</button>
            </ContainerForm>
        </ContainerCreatePost>
    )
}

export default CreatePost
