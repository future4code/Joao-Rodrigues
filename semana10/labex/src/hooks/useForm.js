import React from 'react'

const useForm = (initialState) => {
    const [form, setForm] = React.useState(initialState)

    const onChange = ((event)=>{
        setForm({...form, [event.target.name]: event.target.value})
        console.log(event.target.value)
    })

    const cleanFields = ()=>{
        setForm(initialState)
    }

    return {form, onChange, cleanFields}
}

export default useForm


