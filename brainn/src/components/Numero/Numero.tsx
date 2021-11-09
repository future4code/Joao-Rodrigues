import { ContainerNumero } from "./styled"

type props={
    numeroSorteado: string
}

const Numero = (props: props) => {
    return (
        <ContainerNumero>
            <p>{props.numeroSorteado}</p>
        </ContainerNumero>
    )
}

export default Numero
