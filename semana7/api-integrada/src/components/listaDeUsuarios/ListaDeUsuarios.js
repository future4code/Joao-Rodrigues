import axios from 'axios'
import React from 'react'

const ListaDeUsuarios = () => {
    const [usuarios, setUsuarios] = React.useState([])

    componentDidMount = ()=>{
        this.pegarUsuario()
    }
    
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    
    const headers = {
        Authorization = 'joaopedro-lopes-molina'
    }

    pegarUsuario = ()=>{
        axios.get(url, )
        .then((res)=>{
            setUsuarios(res.data.result.list)
        })
        .catch((err)=>{
            alert(err.response.data.message)
        })
    }

    const usuariosRenderizados = usuarios.map(({id, nome})=>{
        return(
            <li key={id}>{nome}</li>
        )
    })

    return (
        <div>
            {usuariosRenderizados}
        </div>
    )
}

export default ListaDeUsuarios

