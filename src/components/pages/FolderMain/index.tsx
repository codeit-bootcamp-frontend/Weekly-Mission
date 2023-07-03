'use client'

import { useState } from 'react'
import { IFolderMainProps } from '@/lib/types'
import CardContainer from '@/components/common/CardContainer'
import Modal from '@/components/common/Modal'
import SearchBar from '@/components/common/SearchBar'
import * as styles from './index.css'

const FolderMain = ({
  cardLinks,
}: IFolderMainProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalOption, setModalOption] = useState('')

  const openModal = (option: string) => {
    setIsModalOpen(true)
    setModalOption(option)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalOption('')
  }

  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <SearchBar
          className={styles.searchBar}
          placeholder="제목을 검색해 보세요"
        />
        {cardLinks.length > 0 ? (
          <CardContainer
            cardLinks={cardLinks}
            handleAddToFolder={() => { return openModal('addToFolder') }}
            handleDeleteLink={() => { return openModal('deleteLink') }}
            isMyFolder
          />
        ) : <div className={styles.emptyMessage}>저장된 링크가 없습니다</div>}
        {isModalOpen && <Modal option={modalOption} closeModal={closeModal} />}
      </div>
    </main>
  )
}

export default FolderMain
