'use client'

import { useEffect } from 'react'
import { IModalProps } from '@/lib/types'
import Image from 'next/image'
import AddFolder from './AddFolder'
import AddToFolder from './AddToFolder'
import DeleteFolder from './DeleteFolder'
import EditFolder from './EditFolder'
import ShareFolder from './ShareFolder'
import DeleteLink from './DeleteLink'
import * as styles from './index.css'

const Modal = ({
  option,
  closeModal,
}: IModalProps) => {
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).classList.contains(styles.modalOverlay)) {
        closeModal()
      }
    }

    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('keydown', handleEscKey)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [closeModal])

  const options: Record<string, React.ComponentType> = {
    editFolder: EditFolder,
    addFolder: AddFolder,
    shareFolder: ShareFolder,
    deleteFolder: DeleteFolder,
    deleteLink: DeleteLink,
    addToFolder: AddToFolder,
  }

  const SelectedModal = options[option]

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <SelectedModal />
        <button
          className={styles.closeButton}
          type="button"
          onClick={closeModal}
        >
          <Image
            fill
            src="close.svg"
            alt="Close"
          />
        </button>
      </div>
    </div>
  )
}

export default Modal
