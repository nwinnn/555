import styled from 'styled-components';
import { themes } from '../../../../themes';

export const ChatMessageWrapper = styled.div`
  position: relative;
`;

export const ChatMessageTextWrapper = styled.div`
  padding: 25px 15px 30px 15px;
  min-height: 60px;
  color: ${themes.colors.dimGray};
  font-size: ${themes.fontSizes.xv};
  background: ${themes.colors.yellowCrayola};
  word-wrap: break-word;
`;

export const ChatMessageDeleteButton = styled.button`
  border: 0;
  background: ${themes.colors.lemonCurry};
  width: 17px;
  height: 17px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -8.5px;
  top: -8.5px;
  font-size: ${themes.fontSizes.x};
  cursor: pointer;
`;
