import React from 'react'
import styled from 'styled-components'
import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import compartilhar from '../../img/compartilhar.svg'
import bookMarkBlack from '../../img/bookMarkBlack.svg'
import bookMarkWhite from '../../img/bookMarkWhite.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoCompartilhar} from '../SecaoCompartilhar/SecaoCompartilhar'
import facebook from '../../img/facebook.svg'
import instagram from '../../img/instagram.svg'
import twitter from '../../img/twitter.svg'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`
const PostPhoto = styled.img`
  width: 100%;
`

const GrupoIcones = styled.div`
  display: flex;
`

class Post extends React.Component {
  state = {
    curtido: true,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcado: true,
    compartilhado: false
  }

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido
    })

    if(this.state.curtido){
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    }else{
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    }

    console.log(this.state.curtido)
  }
 
  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickBookMark = ()=>{
    this.setState({
      marcado: !this.state.marcado
    })
  }

  onClickCompartilhar = ()=>{
    this.setState({
      compartilhado: !this.state.compartilhado
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoBranco
    } else {
      iconeCurtida = iconeCoracaoPreto
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let iconeBookMark

    if(this.state.marcado) {
      iconeBookMark = bookMarkWhite
    } else {
      iconeBookMark = bookMarkBlack
    }

    let componenteCompartilhar

    if(this.state.compartilhado){
      componenteCompartilhar = <SecaoCompartilhar/>
    }

    return( 
      <PostContainer>
        <PostHeader>
          <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
          <p>{this.props.nomeUsuario}</p>
        </PostHeader>

        <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

        <PostFooter>
          <GrupoIcones>
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

            <IconeComContador
              icone={compartilhar}
              onClickIcone={this.onClickCompartilhar}
            />
          </GrupoIcones>

          <IconeComContador
            icone={iconeBookMark}
            onClickIcone={this.onClickBookMark}
          />
        </PostFooter>
        {componenteComentario}
        {componenteCompartilhar}
      </PostContainer>
    )
  }
}

export default Post