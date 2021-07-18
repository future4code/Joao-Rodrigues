import styled from 'styled-components'

const ContainerAdmin = styled.div`
    max-width: 100%;
    width: 400px;
    margin: 0 auto;
    
    h3{
        text-align: center;
    }
`

const ContainerBtn = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 50px;
`

const Title = styled.h1`
    color: #FF301B;
    margin: 100px 0 30px 0;
    text-align: center;
`

const ContainerTrip = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    border-radius: 5px;
    box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: .3s;
    
    h4{
        padding: 15px 62px 15px 15px;
    }

    :hover{
        background-color: #DCDBD7;
    }
`

const TrashIcon = styled.span`
    font-size: 1em;
    color: #0B3D92;
    padding: 15px;
    transition: .2s;
    pointer-events: auto;

    :hover{
        color: #FF301B;
    }
`

export {ContainerAdmin, ContainerBtn, Title, ContainerTrip, TrashIcon}