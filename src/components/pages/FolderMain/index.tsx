'use client'

import { useState } from 'react'
import { IFolderMainProps } from '@/lib/types'
import CardContainer from '@/components/common/CardContainer'
import Modal from '@/components/common/Modal'
import SearchBar from '@/components/common/SearchBar'
import Image from 'next/image'
import SortButtonLink from './SortButtonLink'
import * as styles from './index.css'

const FolderMain = ({
  folderId,
  folders,
  cardLinks,
}: IFolderMainProps) => {
  const targetFolder = folders.find((folder) => { return folder.id === Number(folderId) })
  let title = ''
  if (targetFolder) {
    title = targetFolder.name
  }
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
        <div className={styles.firstLine}>
          <div className={styles.buttons}>
            <SortButtonLink
              fill={Number(folderId) === 0}
              folderId={0}
              folderName="전체"
            />
            {folders.map((folder) => {
              return (
                <SortButtonLink
                  key={folder.id}
                  fill={Number(folderId) === folder.id}
                  folderId={folder.id}
                  folderName={folder.name}
                />
              )
            })}
          </div>
          <button
            type="button"
            className={styles.addFolder}
            onClick={() => { return openModal('addFolder') }}
          >
            폴더 추가 +
          </button>
          <button
            type="button"
            className={styles.addFolderMobile}
            onClick={() => { return openModal('addFolder') }}
          >
            폴더 추가 +
          </button>
        </div>
        <div className={styles.secondLine}>
          <h3 className={styles.slTitle}>
            {Number(folderId) ? title : '전체'}
          </h3>
          <div className={styles.slOption}>
            <button
              type="button"
              className={styles.optionButton}
              onClick={() => { return openModal('shareFolder') }}
            >
              <Image
                src="/share.svg"
                width={18}
                height={18}
                alt="Share"
              />
              <p>공유</p>
            </button>
            <button
              type="button"
              className={styles.optionButton}
              onClick={() => { return openModal('editFolder') }}
            >
              <Image
                src="/pen.svg"
                width={18}
                height={18}
                alt="Edit"
              />
              <p>이름 변경</p>
            </button>
            <button
              type="button"
              className={styles.optionButton}
              onClick={() => { return openModal('deleteFolder') }}
            >
              <Image
                src="/delete.svg"
                width={18}
                height={18}
                alt="Delete"
              />
              <p>삭제</p>
            </button>
          </div>
        </div>
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
