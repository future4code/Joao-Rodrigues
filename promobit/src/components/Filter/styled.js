import styled from "styled-components";
import { secondaryColor, shadow } from "../../constants/styled";

const FilterContainer = styled.div`
    width: 500px;
    padding: 5px 10px;
    border: 1px solid ${secondaryColor};
    border-radius: 3px;

    @media(max-width: 420px){
        width: 100%;
    }
`

const GenresContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Genre = styled.div`
    display: flex;
    align-items: center;

    input{
        margin-right: 2px;
        cursor: pointer;
        
    }
`

export {
    FilterContainer,
    GenresContainer,
    Genre
}