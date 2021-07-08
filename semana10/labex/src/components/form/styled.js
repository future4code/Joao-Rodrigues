import styled from 'styled-components'

const ContainerForm = styled.form`
    max-width: 100%;
    width: 400px;
    margin: 0 auto;
    font-size: 1em;
    margin-bottom: 149px;
    /* border: 1px solid red; */

    select{
        width: 100%;
        padding: 7px 5px;
        border-radius: 5px;
        outline: none;
        margin-bottom: 10px;
        border: 1px solid;
    }

    input{
        width: 100%;
        padding: 7px 5px;
        border-radius: 5px;
        border: 1px solid;
        outline: none;
        margin-bottom: 10px;
    }

    input:nth-child(3){
        width: 30%;
    }

    input:nth-child(4){
        width: 65%;
        margin-left: 20px;
    }

    textarea{
        width: 100%;
        height: 130px;
        outline: none;
        padding: 7px 5px;
        border-radius: 5px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        border: 1px solid;
    }

    div{
        margin-top: 20px;
        display: flex;
        justify-content: space-evenly;
    }
`

export{
    ContainerForm
}