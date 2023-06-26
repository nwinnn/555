import { IButtonProps } from '../types';
import { Wrapper } from './styles';

export const Button = ({ position, text, bottom, right, onClick, disabled }: IButtonProps) => {
  return (
    <Wrapper
      disabled={disabled}
      onClick={onClick}
      position={position}
      bottom={bottom}
      right={right}
    >
      {text}
    </Wrapper>
  );
};
