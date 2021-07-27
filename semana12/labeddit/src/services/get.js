import axios from "axios";
import { urlBase } from "../constants/urls";

export const getPosts = (setPostsList) =>{
    const token = localStorage.getItem('token')

    const headers ={
        headers:{
            Authorization: token
        }
    }

    axios.get(`${urlBase}/posts`, headers)
    .then((res)=>{
        setPostsList(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

export const getComments = (id, setCommentList) =>{
    const token = localStorage.getItem('token')

    const headers = {
        headers:{
            Authorization: token
        }
    }

    axios.get(`${urlBase}/posts/${id}/comments`, headers)
    .then((res)=>{
        setCommentList(res.data)
    })
    .catch((err)=>{
        console.error(err)
    })
}

// export const getPostsPagination = (postsList, setPostsList, currentPage) =>{
//     const token = localStorage.getItem('token')

//     const headers ={
//         headers:{
//             Authorization: token
//         }
//     }

//     axios.get(`${urlBase}/posts?page=${currentPage}&size=10`, headers)
//     .then((res)=>{
//         setPostsList([...postsList, ...res.data])
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }