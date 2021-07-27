import React, { useEffect, useState } from 'react'
import CreatePost from '../../components/CreatePost/CreatePost'
import Header from '../../components/Header/Header'
import PostCard from '../../components/PostCard/PostCard'
import { ContainerFeed } from '../../Styles/styledFeedPost/styledFeedPost'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import axios from 'axios'
import { urlBase } from '../../constants/urls'
import { getPosts} from '../../services/get'

const FeedPage = () => {
    useProtectedPage()
    const history = useHistory()
    const [postsList, setPostsList] = useState([])
    // const [currentPage, setCurrentPage] = useState(0)
    const {form, onChange, cleanFields} = useForm({
        title:'',
        body:'',
    })

    useEffect(()=>{
        getPosts(setPostsList)
    },[])
    
    // useEffect(()=>{
    //     getPostsPagination(postsList, setPostsList, currentPage)
    // },[currentPage])

    // useEffect(()=>{
    //     const intersectionObserver = new  IntersectionObserver((entries)=>{
    //         if(entries.some((entry) => entry.isIntersecting)){
    //             console.log('Elemento visivel')
    //             setCurrentPage((currentPageInsideSate)=> currentPageInsideSate + 1)
    //         }
    //     }) 

    //     intersectionObserver.observe(document.querySelector('#sentinela')) 
        
    //     return () => intersectionObserver.disconnect()
    // },[])

    const logout = () =>{
        localStorage.removeItem('token')
        history.push('/login')
    }

    const createPost = () => {
        const token = localStorage.getItem('token')

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
            getPosts(setPostsList)
        })
        .catch((err)=>{
            console.error(err)
            alert('Houve algum erro!')
        })
    }

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
                
                <ul>
                    {postsList.map((post)=>{
                        return(
                            <li key={post.id}>
                                <PostCard
                                    post={post}
                                    votePost={votePost}
                                />
                            </li>
                        )
                    })}
                    <li id='sentinela'/>
                </ul>
            </ContainerFeed>
        </div>
    )
}

export default FeedPage
