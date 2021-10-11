import styled from "styled-components";

const ContainerCard = styled.div`
    width: 140px;
    height: 205px;
    box-shadow: ${props => props.shadow || '0'};

    img{
        width: 100%;
    }
`

export{
    ContainerCard
}
 