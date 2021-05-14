import React from 'react';
import timePassed from 'utils/timePassed';
import styled from 'styled-components';
import CommentVotes from './CommentVotes';

const CommentWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 8px;
`;

const UserInfoWrapper = styled.div`
  padding: 3px 10px;
  display: flex;
  gap: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & > p:first-of-type {
    font-weight: 500;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.75rem;
  background-color: #7587a2;
  width: 35px;
  border-radius: 50%;
`;

const TextWrapper = styled.section`
  padding: 15px 38px 10px 20px;
`;

const CommentCard = ({ comment, token, postId }) => {
  const timeElapsed = timePassed(comment.createdAt);

  if (typeof comment.text !== 'string') {
    return null;
  }
  return (
    <CommentWrapper>
      <UserInfoWrapper>
        <Icon>{comment.username[0]}</Icon>
        <UserInfo>
          <p>{comment.username}</p>
          <p>{timeElapsed} atrás</p>
        </UserInfo>
      </UserInfoWrapper>
      <TextWrapper>{comment.text}</TextWrapper>
      <CommentVotes comment={comment} token={token} postId={postId} />
    </CommentWrapper>
  );
};

export default CommentCard;
