import styled from 'styled-components'

const ContainerComment = styled.div`
    width: 100%;
    box-shadow: 2px 2px 2px rgba(145, 71, 255, 0.15);
    border-radius: 3px;
    border: 1px solid #E5E5E5;
    padding: 20px;
    padding-bottom: 10px;
    margin-bottom: 20px;
`

const ContainerTop = styled.div`
    display: flex;
    align-items: center;
    color: #65676B;
    margin-bottom: 10px;

    span{
        margin-left: 10px;
    }
`

const ContainerVote = styled.div`
    margin-top: 20px;
    border-top: 1px solid #E5E5E5;
    display: flex;
    padding-top: 10px;

    span{
        font-size: 1.125em;
        cursor: pointer;

        :active{
            color: #9147FF;
        }
    }

    p{
        margin: 0 3px 4px 3px;
    }
`

export {ContainerComment, ContainerTop, ContainerVote}