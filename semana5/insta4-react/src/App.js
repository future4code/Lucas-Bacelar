import React from 'react';
import './App.css';
import Post from './components/Post/Post';

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
    ]
  }


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
        {Posts}
      </div>
    );
  }
}

export default App;
