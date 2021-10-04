import styled from 'styled-components'

const ContainerVideo = styled.section`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    padding: 25px;

    @media (max-width: 420px){
       grid-template-columns: 1fr;
       justify-content: center;
       gap: 10px;
    }
`

const CardInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 15px;

    div{
        display: flex;
    }
`


export{
    ContainerVideo,
    CardInfo,
}
