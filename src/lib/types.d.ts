// type
export type CardType = {
  id: number
  created_at: string
  updated_at: string | null
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: number
}

export type FolderType = {
  id: number
  created_at: string
  name: string
  user_id: number
}

export type UserType = {
  id: number
  created_at: string
  name: string
  image_source: string
  email: string
}

export type ImageType = {
  src: string
  alt: string
  width: number
  height: number
}

export type PostFolderType = {
  id: number
  created_at: string
  name: string
  user_id: number
}

export type ModalType = {
  folders: FolderType[]
  cardLinks: CardType[]
  closeModal: () => void
}

// common
export interface IBookmarkIconProps {
  className?: string
  isBookmarked?: boolean
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset'
  className?: string
  children: React.ReactNode
}

export interface IButtonLinkProps {
  className?: string
  children: React.ReactNode
  href: string
}

export interface ICardProps {
  cardLink: CardType
  handleAddToFolder?: () => void
  handleDeleteLink?: () => void
  isMyFolder?: boolean
}

export interface ICardContainerProps {
  cardLinks: CardType[]
  handleDeleteLink?: () => void
  handleAddToFolder?: () => void
  isMyFolder?: boolean
}

export interface IModalProps {
  option: string
  folders?: FolderType[]
  cardLinks: CardType[]
  closeModal: () => void
}

export interface IAddToFolderProps {
  folders: FolderType[]
  closeModal: () => void
}

export interface IAddFolderProps {
  closeModal: () => void
}

export interface INavUserProfileProps {
  userImage: string
  userName: string
  userEmail: string
}

export interface ISearchBarProps {
  className?: string
  placeholder?: string
}

// account
export interface IAccountInputProps {
  value: string
  type: string
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  toggleShowPassword?: (e: React.MouseEvent<HTMLButtonElement>) => void
  isConfirmPassword?: boolean
}

export interface IEyeTogglerProps {
  onMouseDown?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

// pages
export interface IFolderProps {
  params: {
    id: string[],
  }
}

export interface IFolderMainProps {
  folderId: string
  folders: FolderType[]
  cardLinks: CardType[]
}

export interface ISortButtonProps {
  fill: boolean
  folderId: number
  folderName: string
}

export interface ISharedProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

export interface ISharedHeaderProps {
  ownerName: string
  ownerImage: string
  folderName: string
}

export interface ISharedMainProps {
  cardLinks: CardType[]
  isMyFolder?: boolean
}

// lib
export interface IgetFolderProps {
  userId: number
  folderId: number
}

export interface IgetFoldersProps {
  userId: number
}

export interface IgetLinksProps {
  userId: number
  folderId: number
}

export interface IgetUserProps {
  userId: number
}

export interface IpostFolderProps {
  name: string
  userId: number
}

export interface IuseScrollHandlerParams {
  threshold: number
}

export interface IuseFolderCreatorParams {
  name: string
  userId: number
}
