export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
}

export interface IButtonLinkProps {
  className?: string;
  children?: React.ReactNode;
  href: string;
}
