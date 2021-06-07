 //Importa para poder usar a lib React. Dai eu vou poder usar jsx e tudo relacionado ao react
import React from 'react';
//Importa a lib styled-components. 
import styled from 'styled-components'
//Importa o component Post
import Post from './components/Post/Post';

// Estilizaçao de uma div
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
// Estilizaçao de uma outra div
const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: center;
  border: 1px solid black;
  margin: 10px 0 15px 0;
  padding: 15px;
  box-sizing: border-box;
`
// Estilizaçao de um h4
const TituloForm = styled.h4`
  margin: 0 0 5px 0;
  padding: 0;
  box-sizing: border-box;
`
// Estilizaçao de um input
const InputItemForm = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  outline: none;
  width: 100%;
  box-sizing: border-box;
`
// Estilizaçao de um botão
const BtnForm = styled.button`
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  cursor: pointer;
`
// Estilizaçao de um h3
const TituloPost = styled.h3`
  margin: 10px 0 5px 0 ;
  padding: 0;
`

//Component principal
class App extends React.Component {
  //declarando propriedades do state(estado do componente que pode ser atualizado)
  state = {
    //criação de um array de objetos post
    listaPosts:[
      {
        nomeUsuario:'Paulinha',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/150'
      },

      {
        nomeUsuario:'Pedrinho',
        fotoUsuario:'https://picsum.photos/50/49',
        fotoPost:'https://picsum.photos/200/140'
      }
    ],

    //criaçao das propriedades referentes aos inputs
    valorInputNome: '',
    valorInputFotoPerfil: '',
    valorInputFotoPost: ''
  }

  //funçao que atualiza a propriedade do state refente ao input.
  //Ele pega o valor que a gente ta digitando no input e joga pra propriedade
  //do state referente ao input que o mesmo ta pegando. No caso da funcao abaixo
  //ela ta pegando o valor atual do input nome e ta passando pro valorInputNome
  onChangeValorInputNome = (event)=>{
    //Atraves do setState que a gente consegue atualizar os valores do state
    this.setState({
      valorInputNome: event.target.value
    })
    console.log(event.target.value)
  }

  onChangeValorInputFotoPerfil = (event)=>{
    this.setState({
      valorInputFotoPerfil: event.target.value
    })
    console.log(event.target.value)
  }

  onChangeValorInputFotoPost = (event)=>{
    this.setState({
      valorInputFotoPost: event.target.value
    })
    console.log(event.target.value)
  }

  //Funçao que adiciona um novo post
  adicionarPost = ()=>{
    //Como cada post é um objeto(foi declarado no state), aqui eu crio uma const
    //chamada novoPost que vai receber os valores atualizdos das propriedades do state
    //referentes aos inputs
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoPerfil,
      fotoPost: this.state.valorInputFotoPost
    }

    //aqui eu crio um novo array de objetos e passo pra esse array o meu novoPost e mais
    //uma copia do array declarado no state
    const novaListaPosts = [novoPost, ...this.state.listaPosts]

    //uso o setState para atualizar o array Posts do state. Passo a nova array criada
    //para a array do state
    this.setState({
      listaPosts: novaListaPosts
    })

    //usando o setstate, eu zero o valor da propriedade do state referente ao input
    //fazendo com que o input fique "limpo"
    this.setState({
      valorInputNome: '',
    })

    this.setState({
      valorInputFotoPerfil: '',
    })

    this.setState({
      valorInputFotoPost: '',
    })
  }

  render() {
    
    //Aqui eu construo um array que recebe o array do state ja atualizado para ser\
    //renderizado no site. dou map e posso fazer com que esse post renderize da forma
    //que eu bem entender. No caso abaixo, to retornando o conteudo do meu array
    //dentro do Component post, que ja foi devidamente estilizado. Tenho que passar tbm
    //uma key que recebe meu index e deve ficar dentro da tag ou component pai 
    const postsComponents = this.state.listaPosts.map((post, index)=>{
        return (
            <Post key={index}
              nomeUsuario={post.nomeUsuario} 
              fotoUsuario={post.fotoUsuario} 
              fotoPost={post.fotoPost}
            />
        )
    }) 

    return (
      <MainContainer>

        {/* container do novoPost. Vai conter os inputs e botoes para 
        adicionar um novo post */}
        <ContainerForm>
          <TituloForm>Novo post</TituloForm>
          <InputItemForm
            type='text'
            placeholder='Seu nome'
            value={this.state.valorInputNome}
            onChange={this.onChangeValorInputNome}
          />

          <InputItemForm
            type='text'
            placeholder='Link da imagem de perfil' 
            value={this.state.valorInputFotoPerfil}
            onChange={this.onChangeValorInputFotoPerfil}
          />

          <InputItemForm
            type='text'
            placeholder='Link da imagem do post'
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeValorInputFotoPost}
          />

          {/* botao que chama a funçao adicionarPost ao ser clicado   */}
          <BtnForm onClick={this.adicionarPost}>Adicionar Post</BtnForm>
        </ContainerForm>
        <TituloPost>Posts</TituloPost>
        {/* chamada do array que contem os posts */}
        {postsComponents}
      </MainContainer>
    );
  }
}

export default App;
