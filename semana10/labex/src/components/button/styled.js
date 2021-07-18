import styled from 'styled-components'

const Btn = styled.button`
    padding: 12px 25px;
    background-color: ${({color})=>color};
    font-size: 0.85em;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 50px;
    transition: .2s;

    :hover{
        opacity: 0.9;
        box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);
    }
`

export{
    Btn
}