export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
}

export interface IButtonLinkProps {
  className?: string;
  children?: React.ReactNode;
  href: string;
}

export interface INavUserProfileProps {
  userImage: string;
  userName: string;
  userEmail: string;
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

export interface IgetUserProps {
  userId: number;
}

export type UserType = {
  id: number
  createdAt: string
  name: string
  image_source: string
  email: string
}

export interface IgetFolderProps {
  userId: number
  folderId: number
}

export type FolderType = {
  id: number
  createdAt: string
  name: string
  user_id: number
}
