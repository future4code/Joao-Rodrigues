import React from 'react'
import {
    ContainerPostCard, 
    ContainerTitle, 
    ContainerText, 
    ContainerTextPost, 
    ContainerIcons, 
    ContainerComment,
    ContainerName
} from './styled'
import {BiComment} from 'react-icons/bi'
import Vote from '../Vote/Vote'
import { useHistory } from 'react-router'

const PostCard = ({post, votePost}) => {   
    const history = useHistory()

    const goToPost = () =>{
        history.push(`/post/${post.id}`)
    } 

    return (
        <ContainerPostCard>
            <ContainerText onClick={goToPost}>
                <ContainerName>
                    <h3>{post.username}</h3>
                </ContainerName>    

                <ContainerTitle>
                    <h3>{post.title}</h3>
                </ContainerTitle>

                <ContainerTextPost>
                    <p>
                        {post.body}
                    </p>
                </ContainerTextPost>
            </ContainerText>
            
            <ContainerIcons>
                <div>
                    <Vote
                        voteSum={post.voteSum}
                        onClickVoteUp={()=>votePost(post.id, 1, post.userVote)}
                        onClickVoteDown={()=>votePost(post.id, -1, post.userVote)}
                    />
                </div>
                
                <ContainerComment>
                    <span onClick={goToPost}><BiComment/></span>
                    <p>{post.commentCount ? post.commentCount:'0'}</p>
                </ContainerComment>                
            </ContainerIcons>
        </ContainerPostCard>
    )
}

export default PostCard
