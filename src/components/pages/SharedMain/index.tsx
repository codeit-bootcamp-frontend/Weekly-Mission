'use client'

import { useState } from 'react'
import { ISharedMainProps } from '@/lib/types'
import SearchBar from '@/components/common/SearchBar'
import CardContainer from '@/components/common/CardContainer'
import Modal from '@/components/common/Modal'
import * as styles from './index.css'

const SharedMain = ({
  cardLinks,
  isMyFolder = false,
}: ISharedMainProps) => {
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
          placeholder="원하는 링크를 검색해 보세요"
        />
        {cardLinks.length > 0 ? (
          <CardContainer
            cardLinks={cardLinks}
            handleAddToFolder={() => { return openModal('addToFolder') }}
            handleDeleteLink={() => { return openModal('deleteLink') }}
            isMyFolder={isMyFolder}
          />
        ) : <div className={styles.emptyMessage}>저장된 링크가 없습니다</div>}
      </div>
      {isModalOpen && <Modal option={modalOption} closeModal={closeModal} />}
    </main>
  )
}

export default SharedMain
