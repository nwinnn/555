import styled from 'styled-components';
import { themes } from '../../../../themes';
import { IChatUsernameStylesProps } from './types';

export const ChatUsernameWrapper = styled.div<IChatUsernameStylesProps>`
  display: flex;
  align-items: center;
  position: ${({ wrapperposition }) => wrapperposition};
  top: ${({ wrappertop }) => wrappertop};
  left: ${({ wrapperleft }) => wrapperleft};
`;

export const ChatUsernameInitials = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: ${themes.fontSizes.xii};
  font-weight: ${themes.fontWeights.medium};
  background: ${themes.colors.lemonCurry};
  position: relative;
  text-transform: uppercase;
`;

export const ChatUsernameText = styled.div`
  background: ${themes.colors.lemonCurry};
  padding: 10px;
  color: ${themes.colors.black};
  font-size: ${themes.fontSizes.xv};
  position: absolute;
  left: 40px;
  width: max-content;
  text-transform: initial;
`;
