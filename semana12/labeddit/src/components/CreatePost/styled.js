import styled from "styled-components"

const ContainerCreatePost = styled.div`
    width: 100%;
    box-shadow: 2px 2px 2px rgba(145, 71, 255, 0.15);
    border-radius: 3px;
    border: 1px solid #E5E5E5;
    padding: 20px;
    padding-top: 10px;
    margin-bottom: 30px;
    background-color: #F9F9Fa;
    color: #65676B;
`

const ContainerTitle = styled.div`
    padding-bottom: 10px;

    h3{
        text-align: center;
    }
`

const ContainerForm = styled.form`
    input{
        width: 100%;
        margin-bottom: 10px;
        padding: 6px 12px;
        border-radius: 4px;
        border: 1px solid #65676B;

        ::placeholder{
            text-align: center;
        }

        :focus{
            border: 1px solid #9147FF;
        }
    }

    textarea{
        width: 100%;
        height: 80px;
        resize: none;
        border: 1px solid #65676B;
        border-radius: 4px;
        padding: 6px 12px;
        font-size: 1em;
        transition: .2s;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

        :focus{
            border: 1px solid #9147FF;
        }

        ::placeholder{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            text-align: center;
        }
    }

    button{
        width: 100%;
        margin-top: 10px;
        padding: 6px 12px;
        border-radius: 4px;
        border: 1px solid #9147FF;
        cursor: pointer;
        color: #9147FF;
        transition: 0.2s;

        :hover{
            background-color: #9147FF;
            color: white;
        }
    }
`

export{ContainerCreatePost, ContainerTitle, ContainerForm}