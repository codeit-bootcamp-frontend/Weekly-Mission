export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: React.ReactNode
}

export interface IButtonLinkProps {
  className?: string
  children?: React.ReactNode
  href: string
}

export interface ISearchBarProps {
  className?: string
  placeHolder?: string
}

export interface INavUserProfileProps {
  userImage: string
  userName: string
  userEmail: string
}

export interface IAccountInputProps {
  value: string
  type: string
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  toggleShowPassword?: (e: React.MouseEvent<HTMLButtonElement>) => void
  isConfirmPassword?: boolean
}

export interface IEyeTogglerProps {
  onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export interface IgetUserProps {
  userId: number
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

export interface IgetFoldersProps {
  userId: number
}

export type FolderType = {
  id: number
  createdAt: string
  name: string
  userId: number
}

export type CardType = {
  id: number
  createdAt: string
  updatedAt: string | null
  url: string;
  title: string;
  description: string;
  image_source: string;
  folderId: number
}

export interface ICardProps {
  link: CardType
}

export interface ICardContainerProps {
  cardLinks: CardType[];
}

export interface IGetLinksProps {
  userId: number
  folderId: number
}

export interface IBookmarkIconProps {
  className?: string
  isBookmarked?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export type ImageType = {
  src: string
  alt: string
  width: number
  height: number
}

export interface IFolderProps {
  params: {
    id: string[] | undefined,
  }
}

export interface IFolderMainProps {
  userId: number
  folderId?: number | undefined
}
