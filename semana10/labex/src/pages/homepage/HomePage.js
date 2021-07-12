import React from 'react'
import Button from '../../components/button/Button'
import {ContainerMain} from './styled'
import { useHistory } from 'react-router-dom'

const HomePage = () => {
    const history = useHistory()

    const loginAdmin = (()=>{
        const token = localStorage.getItem('token')

        if(token === null){
            history.push('/loginpage')
            console.log(token)
        }else{
            history.push('/adminhomepage')
        }
    })

    return (
        <ContainerMain>
            <div>
                <h1>LabeX</h1>
            </div>
            
            <div>
                <Button 
                    name='Ver Viagens'
                    color='#FF301B'
                    onClick={()=>history.push('/listtripspage')}
                />
                <Button
                    name='Area de Admin'
                    color='#0B3D92'
                    onClick={loginAdmin}
                />
            </div>
            
        </ContainerMain>
    )
}

export default HomePage
