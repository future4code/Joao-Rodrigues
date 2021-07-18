import React from 'react'
import {Btn} from './styled'

const Button = ({name, onClick, color}) => {
    return (
        <Btn color={color} onClick={onClick}>{name}</Btn>
    )
}

export default Button
