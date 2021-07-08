import React, { useContext } from 'react'
import Button from '../../components/button/Button'
import axios from 'axios'
import { GlobalContext } from '../../components/globalcontext/GlobalContext'
import {FaTrashAlt} from 'react-icons/fa'
import {ContainerAdmin, ContainerBtn, Title, ContainerTrip, TrashIcon} from './styled'


const AdminHomePage = () => {
    const global = useContext(GlobalContext)

    const deleteTrip = ((id)=>{
        const headers = {
            headers: {
                auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkNmbjZPd0YyOVU5TDJSYzV0UWo1IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1NzMxNDM4Njh9.mmOrfGKlXpE3pIDUZfS3xV5ZwttOI2Exmoci9Sdsxjs'
            }
        }

        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/joaopedro-lopes-molina/trips/${id}`, headers)
        .then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    })

    const showDetails = (()=>{
        
    })

    return (
        <ContainerAdmin>
            <Title>Painel Administrativo</Title>
            <ContainerBtn>
                <Button
                    name='Voltar'
                    color='#0B3D92'
                />
                <Button
                    name='Criar viagem'
                    color='#FF301B'
                />
                <Button
                    name='Logout'
                    color='#0B3D92'
                />
            </ContainerBtn>

            <div>
                {global.tripsList.map(({id, name})=>{
                    return(
                        <ContainerTrip key={id} onClick={showDetails}>
                            <h4>{name}</h4>
                            <TrashIcon onClick={()=>deleteTrip(id)}><FaTrashAlt/></TrashIcon>
                        </ContainerTrip>
                    )
                })}
            </div>
            
        </ContainerAdmin>
    )
}

export default AdminHomePage
