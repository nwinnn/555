import styled from 'styled-components';
import { themes } from '../../themes';
import { IButtonStyleProps } from '../types';

export const Wrapper = styled.button<IButtonStyleProps>`
  padding: 8px 15px 8px 15px;
  background-color: ${({ disabled }) =>
    disabled ? themes.colors.gray : themes.colors.caputMortuum};
  color: ${themes.colors.white};
  position: ${({ position }) => position};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
  border: 0;
  font-size: ${themes.fontSizes.xx};
  box-shadow: 7px 5px 5px rgba(0, 0, 0, 0.4);
  cursor: pointer;
`;
