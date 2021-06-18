import React from 'react'
import styled from 'styled-components'

const Detalhes = ({key, name, email}) => {
    return (
        <div key={key}>
            <li>{name}</li>
            <li>{email}</li>
        </div>
    )
}

export default Detalhes
