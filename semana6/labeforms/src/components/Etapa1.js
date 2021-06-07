import React from 'react'
import styled from 'styled-components'

const ContainerGeral = styled.div`
    width: 500px;
    margin: 0 auto;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`

const Titulo = styled.h3`
    text-align: center;
`

const ContainerForm = styled.form`
    margin-top: 20px;
`

const ItemInput = styled.div`
    display: flex;
    flex-direction: column;

    label{
        margin: 10px 0 5px 0;
        text-align: center;
    }

    input{
        width: 60%;
        padding: 3px;
        margin: 0 auto;
    }
`

const Opcoes = styled.select`
    width: 60%;
    margin: 0 auto;
    padding: 3px;
`


class Etapa1 extends React.Component{
    render(){
        return(
            <ContainerGeral>
                <Titulo>ETAPA 1 - DADOS GERAIS</Titulo>
                <ContainerForm>
                    <ItemInput>
                        <label for='nome'>1. Qual nome?</label>
                        <input
                            type={'text'}   
                            // value={}
                            // onChange={}
                            id={'nome'} 
                        />
                    </ItemInput>

                    <ItemInput>
                        <label for='idade'>2. Qual idade?</label>
                        <input
                            type={'text'}
                            // value={}
                            // onChange={}
                            id={'idade'} 
                        />
                    </ItemInput>

                    <ItemInput>
                        <label for='email'>3. Qual seu email?</label>
                        <input
                            type={'text'}
                            // value={}
                            // onChange={}
                            id={'email'} 
                        />
                    </ItemInput>

                    <ItemInput>
                    <label for={'escolaridade'}>4. Qual sua escolaridade?</label>
                    <Opcoes id={"escolaridade"}>
                        <option value={"medio incompleto"}>ensino medio incompleto</option>
                        <option value={"medio completo"}>ensino medio completo</option>
                        <option value={"superior incompleto"}>ensino superior incompleto</option>
                        <option value={"suoerior completo"}>ensino superior completo</option>
                    </Opcoes>
                    </ItemInput>
                    
                </ContainerForm>
            </ContainerGeral>
        )
    }
}

export default Etapa1