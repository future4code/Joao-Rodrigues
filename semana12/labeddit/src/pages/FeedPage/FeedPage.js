import React from 'react'
import CreatePost from '../../components/CreatePost/CreatePost'
import Header from '../../components/Header/Header'
import PostCard from '../../components/PostCard/PostCard'
import { ContainerFeed } from './styled'

const FeedPage = () => {
    return (
        <div>
            <Header/>
            <ContainerFeed>
                <CreatePost/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
            </ContainerFeed>
        </div>
    )
}

export default FeedPage
