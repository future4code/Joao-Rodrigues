import React from 'react'
import styled from "styled-components";
import {BiUpvote, BiDownvote} from 'react-icons/bi'

const ContainerVote = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    p{
       margin: 0 4px 3px 4px;
    }

    span{
        font-size: 1.125em;
    }
`

const VoteUp = styled.span`
    color: ${(color)=>color};
    
`

const VoteDown = styled.span`
    color: ${(color)=>color}; 
`

const Vote = ({voteSum, colorUp, colorDown, onClickVoteUp, onClickVoteDown}) => {
    return (
        <ContainerVote>
            <VoteUp color={colorUp} onClick={onClickVoteUp}><BiUpvote/></VoteUp>
                <p>{voteSum ? voteSum:'0'}</p>
            <VoteDown color={colorDown} onClick={onClickVoteDown}><BiDownvote/></VoteDown>
        </ContainerVote>
    )
}

export default Vote
