import React from 'react'
import {
    ContainerPostCard, 
    ContainerTitle, 
    ContainerText, 
    ContainerTextPost, 
    ContainerIcons, 
    ContainerVote, 
    ContainerComment,
    ContainerName
} from './styled'
import {BiUpvote, BiDownvote, BiComment} from 'react-icons/bi'
import styled from 'styled-components'

const VoteUp = styled.span`
    color: ${(color)=>color};
    
`

const VoteDown = styled.span`
    color: ${(color)=>color}; 
`


const PostCard = ({username, title, body, commentCount, voteSum, onClick, color, onClickVote}) => {
    return (
        <ContainerPostCard>
            <ContainerText onClick={onClick}>
                <ContainerName>
                    <h3>{username}</h3>
                </ContainerName>    

                <ContainerTitle>
                    <h3>{title}</h3>
                </ContainerTitle>

                <ContainerTextPost>
                    <p>
                        {body}
                    </p>
                </ContainerTextPost>
            </ContainerText>
            
            <ContainerIcons>
                <ContainerVote>
                    <VoteUp color={color} onClick={onClickVote}><BiUpvote/></VoteUp>
                    <p>{voteSum ? voteSum:'0'}</p>
                    <VoteDown color={color} onClick={onClickVote}><BiDownvote/></VoteDown>
                </ContainerVote>
                
                <ContainerComment>
                    <span><BiComment/></span>
                    <p>{commentCount ? commentCount:'0'}</p>
                </ContainerComment>                
            </ContainerIcons>
        </ContainerPostCard>
    )
}

export default PostCard
