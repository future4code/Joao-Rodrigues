import React from 'react'
import {
    ContainerPostCard, 
    ContainerName, 
    Name, 
    ContainerText, 
    ContainerTextPost, 
    ContainerIcons, 
    ContainerVote, 
    ContainerComment
} from './styled'
import {BiUpvote, BiDownvote, BiComment} from 'react-icons/bi'

const PostCard = () => {
    return (
        <ContainerPostCard>
            <ContainerText>
                <ContainerName>
                    <Name>Fulano</Name>
                </ContainerName>

                <ContainerTextPost>
                    <p>
                        Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores 
                        não altera o pão duris. Manduma pindureta quium dia nois paga. 
                        Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, 
                        vitae iaculis nisl. Mé faiz elementum girarzis, nisi eros vermeio.
                    </p>
                </ContainerTextPost>
            </ContainerText>
            
            <ContainerIcons>
                <ContainerVote>
                    <span><BiUpvote/></span>
                    <p>12</p>
                    <span><BiDownvote/></span>
                </ContainerVote>
                
                <ContainerComment>
                    <span><BiComment/></span>
                    <p>39</p>
                </ContainerComment>                
            </ContainerIcons>
        </ContainerPostCard>
    )
}

export default PostCard
