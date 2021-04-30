import React from 'react';
import styled from 'styled-components';
import { useForm } from 'hooks';
import labeddit from '../../services/labeddit';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > textarea {
    height: 100px;
    border-radius: 8px;
    border: 1px solid var(--border);
  }

  & > p {
    font-size: 0.9rem;
    font-weight: 500;

    & > span {
      color: #0b12cd;
    }
  }
`;

const Button = styled.button`
  width: 95px;
  height: 35px;
  border-radius: 16px;
  background-color: var(--primary);
  color: white;
  font-weight: 500;
`;

const CommentForm = ({ post, username, token }) => {
  const [form, handleInputChange] = useForm({ text: '' });

  const createComment = (e) => {
    e.preventDefault();
    labeddit
      .createComment(token, post.id, form)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <FormContainer onSubmit={createComment}>
      <p>
        Comentar como <span>{username}</span>
      </p>
      <textarea
        minLength={5}
        name="text"
        onChange={handleInputChange}
        title="Digite um comentário com no minimo 5 caracteres"
      ></textarea>
      <Button>Comentar</Button>
    </FormContainer>
  );
};

export default CommentForm;
