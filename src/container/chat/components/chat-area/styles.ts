import styled from 'styled-components';
import { themes } from '../../../../themes';

export const ChatAreaWrapper = styled.div`
  position: relative;
  margin: 31px;
  margin-top: 0;
`;

export const ChatAreaBox = styled.textarea`
  width: 100%;
  border: 2px solid ${themes.colors.caputMortuum};
  resize: none;
  min-height: 80px;
  padding: 5px;
  color: ${themes.colors.dimGray};
  &:focus {
    outline: none;
  }
`;
