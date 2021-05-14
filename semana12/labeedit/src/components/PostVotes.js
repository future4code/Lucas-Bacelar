import React from 'react';
import styled from 'styled-components';
import { VoteArrow } from './index';
import { useState } from 'react';
import labeddit from 'services/labeddit';

const VotesWrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 8px;
`;

function PostVotes({ post, token }) {
  const [voteDirection, setVoteDirection] = useState(post.userVoteDirection);
  const [postVotes, setPostVotes] = useState(post.votesCount);
  const [baseVotes] = useState(post.votesCount - voteDirection);

  const votePost = (arrowVoteDirection) => {
    let vote, voteCounter;
    if (arrowVoteDirection === voteDirection) {
      vote = 0;
      voteCounter = 0;
    } else {
      vote = arrowVoteDirection;
      voteCounter = arrowVoteDirection;
    }
    labeddit
      .votePost(post.id, vote, token)
      .then((response) => {
        setPostVotes(baseVotes + voteCounter);
        setVoteDirection(vote);
      })
      .catch((err) => {
        alert('Ocorreu um erro ao votar, por favor cheque sua conexão');
      });
  };

  return (
    <VotesWrapper>
      <VoteArrow
        direction="up"
        voteDirection={voteDirection}
        handleClick={votePost}
      />
      <p>{postVotes}</p>
      <VoteArrow
        direction="down"
        voteDirection={voteDirection}
        handleClick={votePost}
      />
    </VotesWrapper>
  );
}

export default PostVotes;
