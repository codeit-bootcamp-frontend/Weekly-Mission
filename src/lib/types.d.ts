export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
}

export interface IButtonLinkProps {
  className?: string;
  children?: React.ReactNode;
  href: string;
}

export interface IAccountInputProps {
  value: string;
  type: string;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleShowPassword?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isConfirmPassword?: boolean;
}

export interface IEyeTogglerProps {
  onMouseDown: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
