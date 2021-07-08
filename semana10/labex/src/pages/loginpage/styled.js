import styled from 'styled-components'

const ContainerFormLogin = styled.form`
    max-width: 100%;
    width: 400px;
    margin: 0 auto;

    input{
        width: 100%;
        padding: 7px 5px;
        margin-bottom: 10px;
        border-radius: 5px;
        border: 1px solid;
        outline: none;
    }

    div{
        display: flex;
        justify-content: space-evenly;
        margin-top: 15px;
    }
`

const Title = styled.h1`
    color: #0B3D92;
    text-align: center;
    margin: 100px 0 30px 0;
`

export{
    ContainerFormLogin,
    Title
}