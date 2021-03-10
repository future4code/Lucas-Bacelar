import React from "react";
import "./Post.css";

import { IconeComContador } from "../IconeComContador/IconeComContador";

import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";
import marcarSalvo from "../../img/bookmark-black.svg";
import marcarNaoSalvo from "../../img/bookmark_border-black.svg";
import { SecaoComentario } from "../SecaoComentario/SecaoComentario";

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    numeroSalvos: 0,
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
    });
  };

  onClickSalvar = () => {
    let numeroDeSalvos = this.state.salvo ? -1 : 1;
    this.setState({
      salvo: !this.state.salvo,
      numeroSalvos: this.state.numeroSalvos + numeroDeSalvos,
    });
  };

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
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

    return (
      <div className={"post-container"}>
        <div className={"post-header"}>
          <img
            className={"user-photo"}
            src={this.props.fotoUsuario}
            alt={"Imagem do usuario"}
          />
          <p>{this.props.nomeUsuario}</p>
        </div>

        <img
          className={"post-photo"}
          src={this.props.fotoPost}
          alt={"Imagem do post"}
        />

        <div className={"post-footer"}>
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
        </div>
        {componenteComentario}
      </div>
    );
  }
}

export default Post;
