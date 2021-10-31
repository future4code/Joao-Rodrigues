import styled from "styled-components";
import { secondaryColor } from "../../constants/styled";

const DetailsContainer = styled.main`
    width: 80vw;
    margin: 90px auto 150px auto;
    border: 1px solid ${secondaryColor}; 
    
    @media(max-width: 420px){
        width: 100%;
    }
` 

const TitleContainer = styled.div`
    border-bottom: 1px solid ${secondaryColor};
    padding: 10px;
    text-align: center;
`

const InfoContainer = styled.div`
    display: flex;
    padding: 40px 25px;

    @media(max-width: 420px){
        flex-direction: column;
    }
`

const TextContainer = styled.div`
    display: flex;

    img{
        width: 230px;
        height: 350px;
        border: 1px solid ${secondaryColor};
        margin-right: 25px;
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        max-width: 400px;

        span{
            font-size: 1rem;
        }
    }

    @media(max-width: 420px){
        flex-direction: column;
    }
    
`
const TrailerContainer = styled.div`
    margin-left: 25px;

    h4{
        margin-bottom: 20px;
    }

    #mobile{
        display: none;
    }

    @media(max-width: 420px){
        margin: 0;
        
        #desktop{
            display: none;
        }

        #mobile{
            display: inherit;
        }

        h4{
            margin-top: 20px;
        }
    }
`


export{
    DetailsContainer,
    TitleContainer,
    InfoContainer,
    TextContainer,
    TrailerContainer,
}