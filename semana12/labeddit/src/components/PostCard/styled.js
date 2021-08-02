import styled from "styled-components"

const ContainerPostCard = styled.div`
    width: 100%;
    box-shadow: 2px 2px 2px rgba(145, 71, 255, 0.15);
    border-radius: 3px;
    border: 1px solid #E5E5E5;
    padding: 20px;
    padding-bottom: 10px;
    transition: 0.2s;
    margin-bottom: 30px;
    background-color: #F9F9Fa;

    :hover{
        border: 1px solid #9147FF;
    }

    h3{
        color: #65676B;
    }
    
    span{
        cursor: pointer;
        transition: 0.2s;

        :hover{
            color: #9147FF;
        }
    }

`

const ContainerName = styled.div`
    text-align: center;
    margin-bottom: 10px;
`

const ContainerTitle = styled.div`
    margin-bottom: 10px;
`

const ContainerText = styled.div`
    cursor: pointer;
`

const ContainerTextPost = styled.div`
    
`

const ContainerIcons =styled.div`
    margin-top: 20px;
    border-top: 1px solid #E5E5E5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
`

const ContainerComment = styled.div`
    display: flex;
    align-items: center;

    p{
        margin: 0 0 8px 5px;
    }
`
export {
    ContainerPostCard, 
    ContainerTitle, 
    ContainerText, 
    ContainerTextPost, 
    ContainerIcons, 
    ContainerComment,
    ContainerName
}