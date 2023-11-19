// PageNotFound.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const shake = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  25%, 75% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
`;

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  animation: ${fadeIn} 1s ease;
`;

const NotFoundTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #e74c3c; /* Updated text color */
`;

const NotFoundText = styled.p`
  font-size: 1.5rem;
  color: #555; /* Set your desired text color */
  margin-bottom: 30px;
`;

const NotFoundImage = styled.img`
  width: 200px;
  height: auto;
  animation: ${shake} 0.5s ease infinite;
`;

const PageNotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404 - Page Not Found</NotFoundTitle>
      <NotFoundText>Sorry, the page you are looking for might be in another castle.</NotFoundText>
      <NotFoundImage src="images/sad.jpeg" alt="Castle" />
      {/* You can add more elements or links here as needed */}
    </NotFoundContainer>
  );
};

export default PageNotFound;
