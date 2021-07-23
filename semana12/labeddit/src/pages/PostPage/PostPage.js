import React from 'react'
import { ContainerFeed } from '../../Styles/styledFeedPost/styledFeedPost'
import {BiUpvote, BiDownvote, BiComment} from 'react-icons/bi'
import {ContainerPost, ContainerName, ContainerIcons, ContainerVote, ContainerComment} from './styled'
import Comment from '../../components/Comment/Comment'
import CreateComment from '../../components/CreateComment/CreateComment'
import {useProtectedPage} from '../../hooks/useProtectedPage'



const PostPage = () => {
    useProtectedPage()

    return (
        <ContainerFeed>
            <ContainerPost>
                <div>
                    <ContainerName>
                        <h3>Fulano</h3>
                    </ContainerName>

                    <div>
                        <p>
                            Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores 
                            não altera o pão duris. Manduma pindureta quium dia nois paga. 
                            Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, 
                            vitae iaculis nisl. Mé faiz elementum girarzis, nisi eros vermeio.
                        </p>
                    </div>
                </div>

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
            </ContainerPost>

            <CreateComment/>

            <Comment/>
            <Comment/>
            <Comment/>
        </ContainerFeed>
    )
}

export default PostPage
