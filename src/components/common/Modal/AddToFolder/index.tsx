'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { IAddToFolderProps } from '@/lib/types'
import Button from '@/components/common/Button'
import * as styles from './index.css'

const AddToFolder = ({
  folders,
  closeModal,
}: IAddToFolderProps) => {
  const [idOption, setIdOption] = useState(folders[0].id)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const handleClick = (num: number) => {
    setIdOption(num)
  }

  useEffect(() => {
    if (isSubmitted) {
      setIsSubmitted(false)
      closeModal()
    }
  }, [isSubmitted, closeModal])

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.modalHeader}>
        <h2 className={styles.modalTitle}>폴더에 추가</h2>
        <p className={styles.modalDescription}>링크 주소</p>
      </div>
      <div className={styles.modalButtons}>
        {folders.map((folder) => {
          return (
            <button
              key="folder.id"
              type="button"
              className={
                `${idOption === folder.id
                  ? styles.selectedButton
                  : styles.modalButton}`
                }
              onClick={() => { return handleClick(folder.id) }}
            >
              <p className={styles.modalButtonTitle}>
                {folder.name}
                <span className={styles.modalDescription}>
                  1개 링크
                </span>
              </p>
              {idOption === folder.id
              && (
              <Image
                width={14}
                height={14}
                src="/check.svg"
                alt="check"
              />
              )}
            </button>
          )
        })}
      </div>
      <Button
        type="submit"
      >
        추가하기
      </Button>
    </form>
  )
}

export default AddToFolder
