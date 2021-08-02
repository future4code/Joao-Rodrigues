import React, { useEffect, useState } from 'react'
import { ContainerFeed } from '../../Styles/styledFeedPost/styledFeedPost'
import {ContainerPost, None} from './styled'
import Comment from '../../components/Comment/Comment'
import CreateComment from '../../components/CreateComment/CreateComment'
import {useProtectedPage} from '../../hooks/useProtectedPage'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { urlBase } from '../../constants/urls'
import Button from '../../components/Button/Button'
import useForm from '../../hooks/useForm'
import PostCard from '../../components/PostCard/PostCard'
import { getPosts, getComments} from '../../services/get'


const PostPage = () => {
    useProtectedPage()
    const params = useParams()
    const [commentList, setCommentList] = useState([])
    const [postsList, setPostsList] = useState([])
    const {form, onChange, cleanFields} = useForm({
        body:''
    })
    const history = useHistory()

    useEffect(()=>{
        if(!params.id){
            history.pushState('/')
        }

        getPosts(setPostsList)

        getComments(params.id, setCommentList)
    },[])

    const votePost = ((id, direction, userVote) => {
        if(userVote === direction){
            const token = localStorage.getItem('token')

            const headers = {
                headers:{
                    Authorization: token
                }
            } 

            axios.delete(`${urlBase}/posts/${id}/votes`, headers)
            .then((res)=>{
                console.log(res.data)
                getPosts(setPostsList)
            })
            .catch((err)=>{
                console.log(err)
            })

            
        }else{
            const token = localStorage.getItem('token')

            const body = {
                direction: direction
            }

            const headers = {
                headers:{
                    Authorization: token
                }
            } 

            console.log(`antes`, global.postsList)

            axios.put(`${urlBase}/posts/${id}/votes`, body, headers)
            .then((res) => {
                console.log('Sucesso change', res)
                getPosts(setPostsList)
            }).catch((err) => {
                console.log('Erro', err.response.data.message)
            })
        }
    })

    const onSubmitCreateComment = (event) =>{
        event.preventDefault()
        const token = localStorage.getItem('token')

        const headers = {
            headers:{
                Authorization: token
            }
        }

        const body = {
            body: form.body
        }

        axios.post(`${urlBase}/posts/${params.id}/comments`, body, headers)
        .then((res)=>{
            console.log(res)
            cleanFields()
            getComments()
        })
        .catch((err)=>{
            console.log(err)
        })        
    }



    const voteComment = ((id, direction, userVote) => {
        if(userVote === direction){
            const token = localStorage.getItem('token')

            const headers = {
                headers:{
                    Authorization: token
                }
            } 

            axios.delete(`${urlBase}/comments/${id}/votes`, headers)
            .then((res)=>{
                console.log(res.data)
                getComments(params.id, setCommentList)
            })
            .catch((err)=>{
                console.log(err)
            })

        }else{
            const token = localStorage.getItem('token')

            const body = {
                direction: direction
            }
    
            const headers = {
                headers:{
                    Authorization: token
                }
            } 
    
            console.log(`antes`, global.postsList)
    
            axios.put(`${urlBase}/comments/${id}/votes`, body, headers)
            .then((res) => {
                console.log('Sucesso change', res)
                getComments(params.id, setCommentList)
            }).catch((err) => {
                console.log('Erro', err.response.data.message)
            })

        }      
    })

    const postsFilter = postsList.length && postsList.filter((post) => {
        if (post.id === params.id) {
            return true
        } else {
            return false
        }
    }).map((post)=>{
        return(
            <ContainerPost key={post.id}>
                <PostCard
                    post={post}
                    votePost={votePost}
                />
            </ContainerPost> 
        )
    })


    return (
        <ContainerFeed>
            {postsFilter}

            <CreateComment
                onSubmit={onSubmitCreateComment}
                onChange={onChange}
                value={form.body}
            />

            {commentList ? commentList.map((comment)=>{
                return(
                    <Comment
                        key={comment.id}
                        comment={comment}
                        voteComment={voteComment}
                    />           
                )
            }):<None>Nenhum comentario</None>}
        </ContainerFeed>
    )
}

export default PostPage
