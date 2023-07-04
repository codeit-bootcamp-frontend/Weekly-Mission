'use client'

import { useState } from 'react'
import { IAddFolderProps } from '@/lib/types'
import postFolder from '@/lib/api/postFolder'
import Button from '@/components/common/Button'
import * as styles from './index.css'

const AddFolder = ({
  closeModal,
}: IAddFolderProps) => {
  const [title, setTitle] = useState('')

  const createFolder = async () => {
    const addedFolder = await postFolder({ name: title, userId: 8 })
    return addedFolder
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title) {
      alert('폴더 이름을 입력해 주세요.')
      return
    }

    createFolder()
      .then(() => { return closeModal() })
      .catch((err) => { return console.error('Error creating folder: ', err) })
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h2 className={styles.modalTitle}>폴더 추가</h2>
      <input
        className={styles.modalInput}
        type="text"
        value={title}
        onChange={(e) => { return setTitle(e.target.value) }}
        placeholder="제목 입력"
      />
      <Button
        type="submit"
        className={styles.modalButton}
      >
        추가하기
      </Button>
    </form>
  )
}

export default AddFolder
