import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled, { createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  background: rgba(0, 0, 0, 0.1);
  align-items: center;
  width: 300px;
  padding: 10px 20px;
  border-radius: 5px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 1.5em;
  color: rgba(0, 0, 0, 0.8);
`;
const Button = styled.button`
  background: rgba(0, 0, 0, 0.8);;
  border-radius: 3px;
  border: none;
  color: white;
  height: 30px;
`;

const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
`;



class App extends React.Component {
  state = {
    postContent: [
      {
        nomeUsuarioObj: 'paulinha',
        fotoUsuarioObj: 'https://picsum.photos/50/50?a=1',
        fotoPostObj: 'https://picsum.photos/200/150?a=1'
      },
      {
        nomeUsuarioObj: 'Lucas',
        fotoUsuarioObj: 'https://picsum.photos/50/50?a=2',
        fotoPostObj: 'https://picsum.photos/200/150?a=2'
      },
      {
        nomeUsuarioObj: 'Ana',
        fotoUsuarioObj: 'https://picsum.photos/50/50?a=3',
        fotoPostObj: 'https://picsum.photos/200/150?a=3'
      }
    ],
    inputNome: '',
    inputFotoUsuario: '',
    inputFotoPost: ''
  }

  adicionaPost = () => {
    const novoPost = {
      nomeUsuarioObj: this.state.inputNome,
      fotoUsuarioObj: this.state.inputFotoUsuario,
      fotoPostObj: this.state.inputFotoPost
    };

    console.log(novoPost);

    const novoPosts = [novoPost , ...this.state.postContent];

    this.setState({ 
      postContent: novoPosts,
      inputNome: '',
      inputFotoUsuario: '',
      inputFotoPost: ''
    });
  };

  onChangeInputNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ inputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ inputFotoPost: event.target.value });
  };

  render() {
    const Posts = this.state.postContent.map((post) => {
      return <Post 
        nomeUsuario={post.nomeUsuarioObj}
        fotoUsuario={post.fotoUsuarioObj}
        fotoPost={post.fotoPostObj} 
      />
    })

    return (
      <div className={'app-container'}>
        <GlobalStyle />
        <Div>
          <Title>Adicionar Post</Title>
          <Input 
            value={this.state.inputNome}
            onChange={this.onChangeInputNome}
            placeholder={"Nome"}/>

          <Input 
            value={this.state.inputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Link da foto do usuário"}/>

          <Input 
            value={this.state.inputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Link da foto do post"}/>
          <Button onClick={this.adicionaPost}>{"Enviar"}</Button>
        </Div>
        {Posts}
      </div>
    );
  }
}

export default App;
