import React from 'react';
import styled from 'styled-components';

const TextWrapper = styled.section`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 16px 20px 30px 30px;
  border-bottom: 1px solid var(--border);
`;

const PostText = ({ post, handleClick }) => {
  return (
    <TextWrapper onClick={handleClick}>
      <h3>{post.title}</h3>
      <p>{post.text}</p>
    </TextWrapper>
  );
};

export default PostText;
