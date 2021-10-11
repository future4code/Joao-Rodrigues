import styled from "styled-components";
import { neutralColor, primaryColor } from "../../constants/styled";

const HeaderContainer = styled.header`
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: ${neutralColor};
    padding: 10px 0;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;

    span{
        padding: 5px;
        font-size: 1.5rem;
        font-weight: bold;
        color: ${primaryColor};
        transition: .2s;
        
        :hover{
            color: #B50000;
        }
    }

    @media(max-width: 420px){
        width: 100%;
    }
`

export {
    HeaderContainer
}