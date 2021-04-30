import React from 'react';
import styled from 'styled-components';
import { VoteArrow } from 'components';
import { useState } from 'react';
import labeddit from 'services/labeddit';

const VotesWrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 15px 5px;
`;

function CommentVotes({ comment, token, postId }) {
  const [voteDirection, setVoteDirection] = useState(comment.userVoteDirection);
  const [commentVotes, setCommentVotes] = useState(comment.votesCount);
  const [baseVotes] = useState(comment.votesCount - voteDirection);

  const votecomment = (arrowVoteDirection) => {
    let vote, voteCounter;
    if (arrowVoteDirection === voteDirection) {
      vote = 0;
      voteCounter = 0;
    } else {
      vote = arrowVoteDirection;
      voteCounter = arrowVoteDirection;
    }
    labeddit
      .voteComment(token, postId, comment.id, vote)
      .then((response) => {
        setCommentVotes(baseVotes + voteCounter);
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
        handleClick={votecomment}
      />
      <p>{commentVotes}</p>
      <VoteArrow
        direction="down"
        voteDirection={voteDirection}
        handleClick={votecomment}
      />
    </VotesWrapper>
  );
}

export default CommentVotes;
