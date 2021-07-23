import styled from 'styled-components'

const ContainerPost = styled.div`
    width: 100%;
    box-shadow: 2px 2px 2px rgba(145, 71, 255, 0.15);
    border-radius: 3px;
    border: 1px solid #E5E5E5;
    padding: 20px;
    padding-bottom: 10px;
    margin-bottom: 40px;
`

const ContainerName = styled.div`
    margin-bottom: 10px;

    h3{
        color: #65676B;
    }
`

const ContainerIcons =styled.div`
    margin-top: 20px;
    border-top: 1px solid #E5E5E5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
`

const ContainerVote = styled.div`
    display: flex;

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

const ContainerComment = styled.div`
    display: flex;
    align-items: center;
    span{
        font-size: 1.125em;
        cursor: pointer;

        :active{
            color: #9147FF;
        }
    }

    p{
        margin: 0 0 8px 5px;
    }
`

export {ContainerPost, ContainerName, ContainerIcons, ContainerVote, ContainerComment}