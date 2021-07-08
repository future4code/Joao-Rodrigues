import styled from 'styled-components'

const Title = styled.h1`
    color: #FF301B;
    text-align: center;
    margin: 100px 0 30px 0;
`

const ContainerForm = styled.form`
    max-width: 100%;
    width: 400px;
    margin: 0 auto;

    input{
        width: 100%;
        padding: 7px 5px;
        border-radius: 5px;
        border: 1px solid;
        outline: none;
        margin-bottom: 10px;
    }

    select{
        width: 100%;
        padding: 7px 5px;
        border-radius: 5px;
        border: 1px solid;
        outline: none;
        margin-bottom: 10px;
    }

    div{
        display: flex;
        justify-content: space-around;
        margin-top: 15px;
    }
`

export {Title, ContainerForm}