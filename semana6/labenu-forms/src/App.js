import './App.css';
import React from 'react';
import styled from 'styled-components'
import Header from './componentes/Header'
import FormTexto from './componentes/FormTexto'
import FormSelecao from './componentes/FormSelecao'
import Botao from './componentes/Botão'


const Container = styled.div`
  margin: 0 auto;
  background-color: gray;
  text-align: center;
  width: 500px;

  & > :not(:first-child):not(:last-child) {
    margin-bottom: 10px;
  }

  & > :last-child {
    margin-top: 15px;
  }
`


export default class App extends React.Component {
  state = {
    index: 0,
    paginas : [
      {
        cabecalho: "ETAPA 1 - DADOS GERAIS",
        perguntas: [
          {texto: "Qual o seu nome?"},
          {texto: "Qual sua idade?"},
          {texto: "Qual seu email?"},
          {texto: "Qual a sua escolaridade?", 
          selecao: ["Ensino médio incompleto",
          "Ensino médio completo",
          "Ensino superior incompleto",
          "Ensino superior completo"]}
        ]
      },
      {
        cabecalho: "ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR",
        perguntas: [
          {texto: "Qual curso?"},
          {texto: "Qual a unidade de ensino?"}
        ]
      },
      {

        cabecalho: "ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO",
        perguntas: [
          {texto: "Qual curso?"},
          {texto: "Qual a sua escolaridade?", 
          selecao: ["Nenhum",
          "Curso técnico",
          "Curso de inglês"]}
        ]
      }
    ]
  }

  proximaPagina = () => {
    this.setState({index: this.state.index + 1})
  }

  render() {
    let indice = this.state.index;
    let perguntas, cabecalho, agradecimento;
    let tamanho = this.state.paginas.length;

    if(indice < tamanho) {
        // Cabeçalho
        cabecalho = this.state.paginas[indice].cabecalho;

        // Perguntas
        perguntas = this.state.paginas[indice].perguntas.map((pergunta, index) => {
        
        // Todos os formularios de selecao possuem duas keys
        if(Object.keys(pergunta).length == 2) {
          return <FormSelecao 
            pergunta = {`${index + 1}. ${pergunta.texto}`}
            opcoes = {pergunta.selecao}
          />
        }
        else {
          return <FormTexto 
            pergunta = {`${index + 1}. ${pergunta.texto}`}
          />
        }
      })


    }

    else {
      cabecalho = "O FORMULÁRIO ACABOU"
      agradecimento = <p> Muito obrigado por participar! Entraremos em contato!</p>
    }

    console.log(perguntas);
    return (
      <Container>
        <Header 
          texto = {cabecalho}
        />
        {agradecimento}
        {perguntas}
        { indice < tamanho && <Botao onclick = {this.proximaPagina} texto = {"Proxima etapa"} />}
      </Container>
    );   
  }
}

