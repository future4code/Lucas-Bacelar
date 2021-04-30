import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const AnimationContainer = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Animation = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${rotate} 2s linear infinite;
`;

function LoadingAnimation() {
  return (
    <AnimationContainer>
      <Animation />
    </AnimationContainer>
  );
}

export default LoadingAnimation;
