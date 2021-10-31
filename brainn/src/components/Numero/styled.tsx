import styled from "styled-components";

const ContainerNumero = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-color: white;
    color: #333;

    p{
        font-weight: bold;
        font-size: 27px;
    }

    @media(max-width: 420px){
        height: 50px;
        width: 50px;
        font-size: 12px;
    }
`

export{
    ContainerNumero
}