import React from 'react';
import { ReactComponent as Arrow } from 'assets/vote-arrow.svg';
import styled from 'styled-components';

const ArrowSVG = styled(Arrow)((props) => ({
  transform: props.direction === 'up' ? 'rotate(-180deg)' : 'rotate(0deg)',
  width: '23px',
  fill: props.color,
  cursor: 'pointer',
}));

const VoteArrow = ({ direction, voteDirection, handleClick }) => {
  let color = '#878A8C';
  let voteValue = direction === 'up' ? 1 : -1;
  if (direction === 'up') {
    if (voteDirection === 1) {
      color = '#FF4500';
    }
  } else {
    if (voteDirection === -1) {
      color = '#7193FF';
    }
  }
  return (
    <ArrowSVG
      direction={direction}
      color={color}
      alt="interactive arrow to votation"
      onClick={() => handleClick(voteValue)}
    />
  );
};

export default VoteArrow;
