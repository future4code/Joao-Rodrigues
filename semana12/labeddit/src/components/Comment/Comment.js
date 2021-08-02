import React from 'react'
import {ContainerComment, ContainerTop, ContainerVote} from './styled'
import {BiComment} from 'react-icons/bi'
import Vote from '../Vote/Vote'

const Comment = ({comment, voteComment}) => {
    return (
        <ContainerComment>
            <ContainerTop>
                <h3>{comment.username}</h3>
                <span><BiComment/></span>
            </ContainerTop>

            <div>
                <p>
                    {comment.body}
                </p>
            </div>

            <ContainerVote>
                <Vote
                    voteSum={comment.voteSum}
                    onClickVoteUp={()=>voteComment(comment.id, 1, comment.userVote, 'comments')}
                    onClickVoteDown={()=>voteComment(comment.id, -1, comment.userVote, 'comments')}
                />
            </ContainerVote>
            
        </ContainerComment>
    )
}

export default Comment
