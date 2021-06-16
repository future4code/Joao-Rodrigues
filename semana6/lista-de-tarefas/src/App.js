import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 20 0px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
  cursor: pointer;
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

const Separador = styled.hr`
  background-color: gray;
  height: 1.5px;
  width: 60%;
  border: none;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(),
          texto: 'Estudar',
          completa: false
        }
      ],
      inputValue: '',
      filtro: '',
      InputValueBuscar:'',
      nomeTarefa:''
    }

  componentDidUpdate() {
    localStorage.setItem('tarefas', JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {
    const tarefasSalvas = localStorage.getItem('tarefas')
    const objetosTarefas = JSON.parse(tarefasSalvas)
    this.setState({
      tarefas: objetosTarefas
    })     
  };

  onChangeInput = (event) => {
    this.setState({
      inputValue: event.target.value
    })
    console.log('onChangeInput ',event.target.value)
  }

  onChangeBuscar = (event)=>{
    this.setState({
      InputValueBuscar: event.target.value
    })

    console.log('onChangeBuscar ', event.target.value)
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    const novaListaTarefas = [novaTarefa, ...this.state.tarefas]

    this.setState({
      tarefas: novaListaTarefas
    })

    this.setState({
      inputValue: ''
    })
  }

  excluiTodas = ()=>{
    const novaListaTarefas = []
    
    this.setState({
      tarefas: novaListaTarefas
    })
  }

  excluirUltima = ()=>{
    const novaListaTarefas = [...this.state.tarefas]
    novaListaTarefas.shift()

    this.setState({
      tarefas: novaListaTarefas
    })

    console.log('Excluiu ultima')
  }

  buscar = ()=>{
    const novoNomeTarefa = this.state.InputValueBuscar

    this.setState({
      nomeTarefa: novoNomeTarefa
    })

    this.setState({
      InputValueBuscar:''
    })

    console.log('buscou - ', novoNomeTarefa)
  }

  selectTarefa = (id) => {
    const novaListaTarefas = this.state.tarefas.map((tarefa)=>{
      if(id === tarefa.id){
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa 
        }

        return novaTarefa
      }else {
        return tarefa
      }
    })

    this.setState({
      tarefas: novaListaTarefas
    })

    console.log(id)
  }

  onChangeFilter = (event) => {
    this.setState({
      filtro: event.target.value
    })

    console.log(event.target.value)
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Adicionar/excluir a Lista de Tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
          <button onClick={this.excluirUltima}>Excluir ultima</button>
          <button onClick={this.excluiTodas}>Excluir todas</button>
        </InputsContainer>
        <br/>
        <Separador/>
        <h1>Filtrar a Lista de Tarefas</h1>
        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
          <input placeholder='Nome tarefa' value={this.state.InputValueBuscar} onChange={this.onChangeBuscar}/>
          <button onClick={this.buscar}>Buscar</button>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
