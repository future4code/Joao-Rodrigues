import styled from "styled-components";
import { primaryColor, secondaryColor, shadow } from "../../constants/styled";

const TopRateContainer = styled.section`
    height: 300px;
    margin-top: 55px;
    background-color: ${secondaryColor};

    @media(max-width: 420px){
        display: none;
    }
`

const ContentMovies = styled.div`
    width: 80vw;
    margin: 0 auto;
    padding: 15px 0;

    h2{
        color: white;
    }

    div{
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
    }

`

const PopularMoviesContainer = styled.main`
    width: 80vw;
    margin: 40px auto;

    div:first-child{
        display: flex;
        justify-content: space-between;

        h2{
            align-self: flex-end;
        }

        span{
            color: ${primaryColor};
        }
    }

    
    
    @media(max-width: 420px){
        width: 100%;
        padding: 0 10px;
        margin-top: 80px;

        #title-filter{
            display: flex;
            flex-direction: column;
            h2{
                align-self: flex-start;
            }
        }
    }
`

const ContainerFilter = styled.div`
    
    h3{
        margin-right: 20px;
    }

    @media(max-width: 420px){
        display: flex;
        flex-direction: column;
    }
`

const Movies = styled.section`
    margin: 25px 0 50px 0;
    padding-top: 15px;
    border-top: 1PX solid ${secondaryColor};
    display: flex;
    flex-wrap: wrap;
    gap: 24px;

    @media(max-width: 420px){
        justify-content: center;
    }
`

const MovieCardContainer = styled.div`
    width: 162px;
    max-width: 100%;
    height: 245px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid ${secondaryColor};
    padding: 10px 10px 5px 10px;
    transition: 0.2s;
    cursor: pointer;

    :hover{
        box-shadow: ${shadow};
    }
`

const MovieTitle = styled.div`    
    p{ 
        white-space: nowrap; 
        font-size: 0.85rem;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

export{
    TopRateContainer,
    ContentMovies,
    PopularMoviesContainer,
    ContainerFilter,
    Movies,
    MovieCardContainer,
    MovieTitle,
}