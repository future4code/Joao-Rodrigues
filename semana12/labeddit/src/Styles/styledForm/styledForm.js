import styled from "styled-components";

const Container = styled.div`
    background-color: #9147FF;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        color: white;
        margin-top: 180px;
        font-size: 3em;
        margin-bottom: 20px;
    }
`

const Form = styled.form`
    background-color: #F7F7F8;
    padding: 20px;
    width: 25%;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 15%), 0 8px 16px rgb(0 0 0 / 15%);

    input{
        padding: 8px 12px;
        border-radius: 5px;
        border: 1px solid gray;
        width: 100%;
        font-size: 1.125em;
        margin-bottom: 10px;

        :focus{
            border: 1px solid #9147FF;

            ::placeholder{
                color: #b4b4b4;
                transition: 0.2s;
            }
        }

        
    }
`

export {
    Container,
    Form
}