import React, { useContext } from 'react'
import Button from '../../components/button/Button'
import {ContainerMain, ConatinerInfo, ContainerBtn, ContainerCandidate} from './styled'
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'
import CardCandidates from '../../components/cardcandidates/CardCandidates'
import Loading from '../../components/loading/Loading'


const TripDetailsPage = () => {
    const [details, setDetails] = React.useState({})
    const [approveds, setApproveds] = React.useState([])
    const [candidates, setCandidates] = React.useState([])
    const history = useHistory()
    const {id} = useParams()

    React.useEffect(()=>{
        const token = localStorage.getItem('token')

        if(token === null){
            console.log('Nao esta logado')
            history.push('/loginpage')
        }else{
            const headers = {
                headers:{
                    auth: token
    
                }
            }
            axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/joaopedro-lopes-molina/trip/${id}`, headers)
            .then((res)=>{
                setDetails(res.data.trip)
                setApproveds(res.data.trip.approved)
                setCandidates(res.data.trip.candidates)
            }).catch((err)=>{
                console.log(err)
            })
        }
    },[details])

    const onClickApproved = ((idCadidate, approved)=>{
        const token = localStorage.getItem('token')

        const headers = {
            headers:{
                auth: token

            }
        }

        const body = {
            approve: approved
        }

        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/joaopedro-lopes-molina/trips/${id}/candidates/${idCadidate}/decide`, body, headers)
        .then((res)=>{
            console.log(res.data)
            if(approved){
                alert('Candidato aprovado')
            }else{
                alert('Candidato reprovado')
            }
        }).catch((err)=>{
            alert('Ocorreu um erro')
            console.log(err)
        })
    })


    return (
        <ContainerMain>
            <ConatinerInfo>
                <h1>{details.name}</h1>
                <ul>
                    <li>                        
                        <p><span>Nome: </span>{details.name}</p>
                    </li>

                    <li>                       
                        <p><span>Descrição: </span>{details.description}</p>
                    </li>

                    <li>                        
                        <p><span>Planeta </span>{details.planet}</p>
                    </li>

                    <li>
                        <p><span>Duração: </span>{details.durationInDays} dias</p>
                    </li>
                    
                    <li>
                        <p><span>Data: </span>{details.date}</p>
                    </li>
                </ul>
            </ConatinerInfo>

            <ContainerBtn>
                <Button
                    onClick={()=>history.goBack()}
                    name='Voltar'
                    color='#0B3D92'
                />
            </ContainerBtn>
            
            <ContainerCandidate>
                
                <h3>Candidatos Pendentes</h3>
                {candidates.length ? candidates.map(({id, name, age, profession, country, applicationText})=>{
                    return(
                        <CardCandidates
                            key={id}
                            name={name}
                            profession={profession}
                            age={age}
                            country={country}
                            applicationText={applicationText}
                            onClickApproved={()=>onClickApproved(id, true)}
                            onClickReproved={()=>onClickApproved(id, false)}
                        />
                    )
                }):'Nenhum candidato pendente'}
                <h3>Candidatos Aprovados</h3>
                {approveds.length ? approveds.map(({id, name})=>{
                    return(
                        <p key={id}>{name}</p>
                    )
                }):'Nenhum candidato aprovado'}
            </ContainerCandidate>
        </ContainerMain>
    )
}

export default TripDetailsPage
