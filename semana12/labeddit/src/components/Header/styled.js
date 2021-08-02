import styled from 'styled-components'

const ContainerHeader = styled.header`
    background-color: #F7F7F8;
    overflow: hidden;
    position: fixed;
    top: 0;
    max-width: 100%;
    width: 100%;
    padding: 10px 120px;
    border-bottom: 1px solid lightgray;
    box-shadow: 0 2px 4px rgba(145, 71, 255, 0.2);
`

const ContainerContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    span{
        color: #9147FF;
        font-size: 1.5em;
        font-weight: bold;
        padding: 3px;
    }
`

const LogoutBtn = styled.button`
    padding: 8px 15px;
    border: none;
    border-radius: 5px;
    background-color: #9147FF;
    color: white;
    cursor: pointer;
    transition: 0.2s;
    
    :hover{
        opacity: 0.9;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
    }
`

const ContainerSeacrch = styled.form`
    flex: 1 0 300px;
    display: flex;
    justify-content: center;
    align-items: center;

    input, button{
        padding: 8px 15px;
        border: none;
        background-color: #E5E5E5;
    }

    input{
        width: 30%;
        border-radius: 5px 0 0 5px;       
    }

    button{
        padding: 5.5px 12px;
        font-size: 1em;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
        color: #9147FF;
    }
`

export{ContainerHeader, ContainerContent, LogoutBtn, ContainerSeacrch}