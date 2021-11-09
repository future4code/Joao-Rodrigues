import { useState, useEffect } from "react"
import Select from "../../components/Select/Select"
import { DIA_DE_SORTE_COR, LOTO_FACIL_COR, LOTO_MANIA_COR, MEGA_SENA_COR, QUINA_COR, TIME_MANIA_COR } from "../../constants/style"
import { Concursos, Loterias, LoteriasConcursos } from "../../interface/interfaces"
import { getConcursos, getLoterias, getLoteriasConcursos } from "../../services/get"
import { Container, ContainerNumeros, Logo } from "./styled"
import LogoLoteria from '../../assets/img/logoLoteria.svg'
import Numero from "../../components/Numero/Numero"


const HomePage = () => {
    const [loterias, setLoterias] = useState<[Loterias]>()
    const [loteriasConcursos, setLoteriasConcursos] = useState<[LoteriasConcursos]>()
    const [concurso, setConcurso] = useState<Concursos>()
    const [jogoSelecionado, setJogoSelecionado] = useState<string>('0')
    const [cor, setCor] = useState<string>('')

    useEffect(() => {
        getLoterias(setLoterias)
        getLoteriasConcursos(setLoteriasConcursos) 
    }, [])

    useEffect(() => {
        mudarDeJogo()
    }, [jogoSelecionado, loteriasConcursos])

    const onChangeJogoSelecionado = (ev: any):void =>{
        setJogoSelecionado(ev.target.value)
    }

    const chamarConcurso = () =>{  
        loteriasConcursos?.forEach(item =>{
            if(item.loteriaId === Number(jogoSelecionado)){
                getConcursos(setConcurso, item.concursoId)
            }
        })
        
    }

    const mudarDeCor = () =>{
        switch (Number(jogoSelecionado)) {
            case 0:
                setCor(MEGA_SENA_COR)
        
                break
            case 1:
                setCor(QUINA_COR)
         
                break
            case 2:
                setCor(LOTO_FACIL_COR)
               
                break
            case 3:
                setCor(LOTO_MANIA_COR)
           
                break
            case 4:
                setCor(TIME_MANIA_COR)
               
                break
            case 5:
                setCor(DIA_DE_SORTE_COR)
                break
            default:
                setCor(MEGA_SENA_COR)
                break
        }
    }

    const mudarDeJogo = () =>{
        mudarDeCor()
        chamarConcurso()
    }

    const renderizarNumeros = () =>{
        const numeros = concurso?.numeros
        return numeros?.map((numero)=>{
            return(
                <Numero
                    key={numero}
                    numeroSorteado={numero}
                />
            )
        })
    }
    

    const nomeJogo: string | undefined = loterias?.filter((loteria)=>{
        if(loteria.id === Number(jogoSelecionado)){
            return true
        }else{
            return false
        }
    }).map((loteria)=>{
        return loteria.nome
    }).shift()    

    return (
        <Container>
            <div id='jogo-container' style={{backgroundColor: cor}}>
                <Select
                    valorSelecionado={jogoSelecionado}
                    onChange={onChangeJogoSelecionado}
                    jogos={loterias}
                />
                
                <div id='logo'>
                    <img src={LogoLoteria} alt="logo" />
                    <Logo>{nomeJogo}</Logo>
                </div>

                <div id='concurso'>
                    <p>Concurso</p>
                    <p>{concurso?.id} - {concurso?.data.slice(0, 10)}</p>
                </div>
            </div>

            <ContainerNumeros>
                <div id='div'>

                </div>

                <div id='sorteio'>
                    {renderizarNumeros()}
                </div>

                <div id='aviso'>
                    <span>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</span> 
                </div>
                
            </ContainerNumeros>
        </Container>
    )
}

export default HomePage
