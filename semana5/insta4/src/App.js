import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
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
    ]
  }

  render() {

    const postsComponents = this.state.listaPosts.map((post, index)=>{
        return (
            <Post key={index}>
              {post.nomeUsuario} 
              {post.fotoUsuario} 
              {post.fotoPost}
            </Post>
        )
    }) 

    return (
      <MainContainer>
        {postsComponents}
        {/* <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        /> */}
      </MainContainer>
    );
  }
}

export default App;
