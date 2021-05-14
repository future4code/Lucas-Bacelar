import labeddit from 'services/labeddit';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import GlobalStateContext from 'global/GlobalStateContext';
import PostCard from 'components/PostCard';
import styled from 'styled-components';
import { useForm } from 'hooks';
import LoadingAnimation from 'components/LoadingAnimation';

const FeedContainer = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 650px;
`;

const FormPost = styled.section`
  width: 600px;
  min-height: 250px;
  margin-top: 40px;
  margin-bottom: 20px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);

  & > span {
    display: flex;
    align-items: center;
    padding: 4px 25px;
    font-size: 1.5rem;
    border-bottom: 1px solid var(--border);
  }

  & > form {
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    & > input,
    textarea {
      border-radius: 4px;
      border: 1px solid var(--border);

      &::placeholder {
        text-align: center;
      }
    }

    & > input {
      height: 32px;
    }

    & > textarea {
      height: 150px;
    }

    & > button {
      margin-top: 8px;
      align-self: center;
      width: 155px;
      height: 40px;
      border-radius: 16px;
      background-color: var(--primary);
      color: white;
      font-weight: 500;
    }
  }
`;

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [form, handleInputValue] = useForm({ text: '', title: '' });
  const { token } = useContext(GlobalStateContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      labeddit
        .getPosts(token)
        .then((response) => {
          setPosts(response.posts);
          setLoading(false);
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }
  }, [token]);

  const createPost = (e) => {
    e.preventDefault();
    labeddit
      .createPost(token, form)
      .then((response) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <FeedContainer>
      <FormPost>
        <span>Criar um post</span>
        <form onSubmit={createPost}>
          <input
            name="title"
            value={form.title}
            onChange={handleInputValue}
            placeholder="Titulo"
            pattern="[a-zA-Z0-9]{5,}"
            title="Digite 5 ou mais caracteres para o titulo"
            required
          />
          <textarea
            minLength={10}
            name="text"
            onChange={handleInputValue}
            placeholder="Texto"
            title="Digite 10 ou mais caracteres para o texto"
            required
          />
          <button>Postar</button>
        </form>
      </FormPost>
      {posts ? (
        posts?.map((post) => {
          return <PostCard token={token} key={post.createdAt} post={post} />;
        })
      ) : (
        <p>Carregando</p>
      )}
    </FeedContainer>
  );
};

export default Feed;
