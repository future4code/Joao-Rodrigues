// Seçao de imports
import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'


// SEÇAO DE ESTILIZAÇAO DO COMPONENT

// estilizaçao da div pai de todas
const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`
// estilizaçao da div responsavel pelo header(onde vai ficar a foto de perfil e o nome)
const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`
// estilizaçao da div responsavel pelo footer(onde vai ficar os botoes de like e coment)
const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`
// estilizaçao da img da foto de perfil
const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`
// estilizaçao da img do post
const PostPhoto = styled.img`
  width: 100%;
`

// CODIGO DO COMPONENT
class Post extends React.Component {
  // Criaçao do obj state. todas as propriedades dele poderá sera 
  // auterada em tempo real
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0
  }

  // metodo do component post. Ao clicar em button curtir(coraçao) ele faz o 
  // indicado dentro do metodo
  onClickCurtida = () => {
    console.log('Curtiu!')
  }

  // metodo que vai fazer a mudança de estado da propriedade comentado 
  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  // metodo que vai fazer com que, ao enviar o comentario, atualize o valor de comentarios
  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  // Parte do component que vai ser renderizada na tela
  render() {

    // variavel que vai receber o icone de curtida. icone branco é pq nao foi curtido
    // icone preto é pq foi curtido
    let iconeCurtida

    // condicional que diz que se o estado da propriedade 'curtido' for true
    // vai renderizar um coraçao preto, se for false, vai renderizar um branco
    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    // criaçao de uma variavel
    let componenteComentario

    // condicional que diz que se a propriedade 'comentado' for true,
    // ele recebe o componente 'SecaoComentario'
    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return( 
      <PostContainer>
        <PostHeader>
          <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
          <p>{this.props.nomeUsuario}</p>
        </PostHeader>

        <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

        <PostFooter>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
          />

          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />
        </PostFooter>
        {componenteComentario}
      </PostContainer>
    )
  }
}

export default Post