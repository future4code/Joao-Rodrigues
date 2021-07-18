import styled from "styled-components"

const ContainerMain = styled.div`
    padding-top: 250px ;
    display: flex;
    flex-direction: column;
    align-items: center;

    div:nth-child(1){
        display: flex;
        align-items: center;
        margin-bottom: 20px;

        h1{
            font-size: 2.5em;
            color: #FF301B;
        }
    }

    div:nth-child(2){
        display: flex;
        justify-content: space-between;
        width: 280px;
        max-width: 280px;
    }
`

export {
    ContainerMain
}