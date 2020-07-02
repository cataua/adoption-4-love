import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 770px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 1s;

  p {
    font-size: 100px;
    color: #322153;
  }

  form {
    margin: 20px 0;
    width: 340px;
    text-align: center;
    color: #322153;
   
    a {
      color: #322153;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#322153')};
      }
    }

    input {
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      width: 100%;
      color: #666360;
      display: flex;
      margin-bottom: 10px;
      align-items: center;
      flex: 1;
      color: #322153;

    &::placeholder {
      color: #666360;
    }
  }

  select {
    background: transparent;
    padding: 0 16px;
    width: 100%;
    height: 60px;
    border: 2px solid #232129;
    border-radius: 10px;
    -webkit-appearance: none;
    cursor: pointer;

    svg {
      background: #000;
    }
  }

    button {
      background: #322153;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: #ffff;
      width: 100%;
      font-weight: 600;
      margin-top: 16px;
      transition: background-color 0.2s;
      &:hover {
        background: ${shade(0.2, '#322153')};
      }
    }
  }
`;
