import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import ListaMatch from '../listamatch/ListaMatch'
import { GlobalContext } from '../globalcontext/GlobalContext'

const MatchList = styled.div`
    max-width: 340px;
    width: 100%;
    margin: 30px auto;
    box-shadow: 0 4px 8px 2px rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
    color: #333;

    :hover{
        box-shadow: 0 8px 16px 2px rgba(0,0,0,0.2);
    }
`

const ContainerList = styled.ul`
    display: flex;
    flex-direction: column;
`

const ItemList = styled.li`
    list-style: none;
    color: #d63031;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px 20px;
    transition: 0.3s;
    border-radius: 3px;

    :hover{
        background-color: #d63031;
        color: #fbfbfb;
    }

    img{
        max-width: 40px;
        width: 40px;
        height: 40px;
        border-radius: 100%;
    }

    span{
        margin-left: 10px;
        font-size: 1.125em;
    }
`

const TelaMatch = () => {
    const global = React.useContext(GlobalContext)
    const [matches, setMatches] = React.useState([])

    React.useEffect(()=>{
        pegaMatches()
    },[global.next])

    const pegaMatches = (()=>{
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joaopedro/matches')
        .then((res)=>{
            setMatches(res.data.matches)
        }).catch((err)=>{
            console.log(err)
        })
    })

    console.log(matches)

    return (
        <MatchList>
            <ContainerList>
                {matches.map(({id, name, photo})=>{
                    return(
                        <ListaMatch
                            key={id}
                            name={name}
                            photo={photo}
                        />
                    )
                })}
            </ContainerList>
        </MatchList>
    )
}

export default TelaMatch
