import React from "react";
import "./Post.css";

import { IconeComContador } from "../IconeComContador/IconeComContador";

import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";
import marcarSalvo from "../../img/bookmark-black.svg";
import marcarNaoSalvo from "../../img/bookmark_border-black.svg";
import { SecaoComentario } from "../SecaoComentario/SecaoComentario";
import styled from "styled-components";

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

const PostComentario = styled.p`
 padding: 2px 8px;
 margin: 3px 0;
 border: 1px solid black;

 & > span {
   font-weight: bold;
 }
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    numeroSalvos: 0,
    comentarios: [],
    showComentarios: false
  };

  onClickCurtida = () => {
    console.log("Curtiu!");
    let numeroCurtida = this.state.curtido ? -1 : 1;
    this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas: this.state.numeroCurtidas + numeroCurtida,
    });
  };

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando,
      showComentarios: false
    });
  };

  onClickSalvar = () => {
    let numeroDeSalvos = this.state.salvo ? -1 : 1;
    this.setState({
      salvo: !this.state.salvo,
      numeroSalvos: this.state.numeroSalvos + numeroDeSalvos,
    });
  };

  aoEnviarComentario = (comentario) => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
      comentarios: [...this.state.comentarios, comentario],
      showComentarios: true
    });
  };

  render() {
    let iconeCurtida, iconeSalvo;

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto;
    } else {
      iconeCurtida = iconeCoracaoBranco;
    }

    let componenteComentario;

    if (this.state.comentando) {
      componenteComentario = (
        <SecaoComentario aoEnviar={this.aoEnviarComentario} />
      );
    }

    if(this.state.salvo) {
      iconeSalvo = marcarSalvo;
    } else {
      iconeSalvo = marcarNaoSalvo;
    }

    // Adição comentarios

    let arrayComentarios = this.state.comentarios.map((comentario, index) => {
      return <PostComentario><span>{"Pessoa"}{index}</span> {comentario}</PostComentario>
    })

    return (
      <PostContainer>
        <PostHeader>
          <UserPhoto
            src={this.props.fotoUsuario}
            alt={"Imagem do usuario"}
          />
          <p>{this.props.nomeUsuario}</p>
        </PostHeader>

        <PostPhoto
          src={this.props.fotoPost}
          alt={"Imagem do post"}
        />

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

          <IconeComContador
            icone={iconeSalvo}
            onClickIcone={this.onClickSalvar}
            valorContador={this.state.numeroSalvos}
          />
        </PostFooter>
        {componenteComentario}
        {arrayComentarios}
      </PostContainer>
    );
  }
}

export default Post;
