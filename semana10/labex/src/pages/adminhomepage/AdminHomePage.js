import React, { useContext } from 'react'
import Button from '../../components/button/Button'
import axios from 'axios'
import { GlobalContext } from '../../components/globalcontext/GlobalContext'
import {FaTrashAlt} from 'react-icons/fa'
import {ContainerAdmin, ContainerBtn, Title, ContainerTrip, TrashIcon} from './styled'
import { useHistory } from 'react-router-dom'



const AdminHomePage = () => {
    const global = useContext(GlobalContext)
    const history = useHistory()

    React.useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token === null){    
            console.log('Nao esta logado')
            history.push('/loginpage')
        }
    },[])

    const deleteTrip = ((id)=>{
        const token = localStorage.getItem('token')

        const header = {
            headers: {
                auth: token
            }
        }

        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/joaopedro-lopes-molina/trips/${id}`, header)
        .then((res)=>{
            console.log(res)
            alert('Excluido com sucesso!')
        }).catch((err)=>{
            console.log(err)
        })
    })

    const logout = (()=>{
        localStorage.removeItem('token')
        history.push('/loginpage')
    })

    const showDetails = ((id)=>{
        history.push(`/tripdetailspage/${id}`)
    })

    return (
        <ContainerAdmin>
            <Title>Painel Administrativo</Title>
            <ContainerBtn>
                <Button
                    onClick={()=>history.push('/')}
                    name='Voltar'
                    color='#0B3D92'
                />
                <Button
                    onClick={()=>history.push('/createtrip')}
                    name='Criar viagem'
                    color='#FF301B'
                />
                <Button
                    onClick={logout}
                    name='Logout'
                    color='#0B3D92'
                />
            </ContainerBtn>

            <div>
                {global.tripsList.length? global.tripsList.map(({id, name})=>{
                    return(
                        <ContainerTrip key={id} >
                            <h4 onClick={()=>showDetails(id)}>{name}</h4>
                            <TrashIcon onClick={()=>deleteTrip(id)}><FaTrashAlt/></TrashIcon>    
                        </ContainerTrip>
                    )
                }):<h3>Nenhuma viagem disponível</h3>}
            </div>            
        </ContainerAdmin>
    )
}

export default AdminHomePage
