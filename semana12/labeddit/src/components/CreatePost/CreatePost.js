import React from 'react'
import styled from 'styled-components'
import {ContainerCreatePost, ContainerTitle, ContainerForm} from './styled'


const CreatePost = () => {
    return (
        <ContainerCreatePost>
            <ContainerTitle>
                <h3>Criar Post</h3>
            </ContainerTitle>
            
            <ContainerForm>
                <textarea
                    placeholder='Texto do seu post aqui'
                />

                <button type='submit'>Postar</button>
            </ContainerForm>
        </ContainerCreatePost>
    )
}

export default CreatePost
