import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div `
  display: flex;
  max-height: 300px;
  justify-content: center;
`;

export const Button = styled.button`
  background: #322153;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #ffff;
  width: 150px;
  font-weight: 600;
  margin: 16px 20px;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, '#322153')};
  }
`;