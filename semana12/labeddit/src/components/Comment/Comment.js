import React from 'react'
import {ContainerComment, ContainerTop, ContainerVote} from './styled'
import {BiUpvote, BiDownvote, BiComment} from 'react-icons/bi'

const Comment = () => {
    return (
        <ContainerComment>
            <ContainerTop>
                <h3>Fulano</h3>
                <span><BiComment/></span>
            </ContainerTop>

            <div>
                <p>
                    Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores 
                    não altera o pão duris. Manduma pindureta quium dia nois paga. 
                    Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, 
                    vitae iaculis nisl. Mé faiz elementum girarzis, nisi eros vermeio.
                </p>
            </div>

            <ContainerVote>
                <span><BiUpvote/></span>
                <p>12</p>
                <span><BiDownvote/></span>
            </ContainerVote>
            
        </ContainerComment>
    )
}

export default Comment
