import styled from "styled-components";

const ContainerMain = styled.div`
    max-width: 100%;
    width: 500px;
    margin: 0 auto;
`

const ConatinerInfo = styled.div`

    h1{
        color: #FF301B;
        text-align: center;
        margin: 40px 0;
    }

    li{
        list-style: none;
        display: flex;
        margin-bottom: 10px;

        span{
            font-weight: bold;
        }
    }
`

const ContainerBtn = styled.div`
    margin: 40px 0;
    display: flex;
    justify-content: center;
`

const ContainerCandidate = styled.div`
    text-align: center;
    margin-bottom: 40px;

    h3{
        margin: 20px ;
        color: #FF301B;
    }

    h3:nth-child(1){
        color: #0B3D92;
    }

    p{
        margin-bottom: 20px;
    }
`

export {ContainerMain, ConatinerInfo, ContainerBtn, ContainerCandidate}