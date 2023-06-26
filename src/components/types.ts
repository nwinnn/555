export interface IButtonStyleProps {
  position?: string;
  bottom?: string;
  right?: string;
  disabled?: boolean;
}

export interface IButtonProps extends IButtonStyleProps {
  text: string;
  onClick: () => void;
}
