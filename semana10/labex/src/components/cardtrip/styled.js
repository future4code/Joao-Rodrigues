import styled from 'styled-components'

const Card = styled.div`
    width: 400px;
    margin-bottom: 20px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    padding: 20px;
    color: #1a1d1a;
    box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);

    h3{
        text-align: center;
        color: #FF301B;
        margin-bottom: 20px;
    }
`

const ContainerInfo = styled.div`
    margin: 10px 0;
    color: #1a1a1a;
`

const Info = styled.span`
    font-size: 0.90em;
    font-weight: bold;
`

export{
    Card,
    ContainerInfo,
    Info
}