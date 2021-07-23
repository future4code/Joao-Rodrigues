import React, { useContext } from 'react'
import CreatePost from '../../components/CreatePost/CreatePost'
import Header from '../../components/Header/Header'
import PostCard from '../../components/PostCard/PostCard'
import { ContainerFeed } from '../../Styles/styledFeedPost/styledFeedPost'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useHistory } from 'react-router-dom'
import { GlobalContext } from '../../globalContext/GlobalContext'
import useForm from '../../hooks/useForm'
import axios from 'axios'
import { token, urlBase } from '../../constants/Constants'

const FeedPage = () => {
    useProtectedPage()
    const history = useHistory()
    const global = useContext(GlobalContext)
    const {form, onChange, cleanFields} = useForm({
        title:'',
        body:'',
    })

    const logout = () =>{
        localStorage.removeItem('token')
        history.push('/login')
    }

    const goToPost = () =>{
        alert('foi para o post')
    } 

    const createPost = () => {
        const body = {
            title: form.title,
            body: form.body
        }

        const headers = {
            headers:{
                Authorization: token
            }
        }

        axios.post(`${urlBase}/posts`, body, headers)
        .then((res)=>{
            console.log(res.data)
            cleanFields()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const vote = (()=>{
        
    })

    return (
        <div>
            <Header
                onClick={logout}
            />
            <ContainerFeed>
                <CreatePost
                    onChangeTitle={onChange}
                    valueTitle={form.title}
                    onChangeBody={onChange}
                    valueBody={form.body}
                    onClick={createPost}
                />
                {global.postsList.map(({id, username, title, body, commentCount, voteSum})=>{
                    return(
                        <PostCard
                            key={id}
                            onClick={goToPost}
                            username={username}
                            title={title}
                            body={body}
                            commentCount={commentCount}
                            voteSum={voteSum}
                            onClickVote={()=>vote(id)}
                        />
                    )
                })}
            </ContainerFeed>
        </div>
    )
}

export default FeedPage
