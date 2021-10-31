import { Loterias } from "../../interface/interfaces"
import { SelectContainer } from "./styled"

type jogosLoteria ={
    jogos: [Loterias] | undefined
    valorSelecionado?: string | undefined 
    onChange?: any
}

const Select = (props: jogosLoteria) => {
    const renderizarOpcoes = () =>{
        return props.jogos?.map(({id, nome})=>{
            return(
                <option key={id} value={id}>{nome}</option>   
            )
        })
    }

    return (
        <SelectContainer
            value={props.valorSelecionado}
            onChange={props.onChange}
        >
            {renderizarOpcoes()}
        </SelectContainer>
    )
}

export default Select
