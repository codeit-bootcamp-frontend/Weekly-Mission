'use client'

import {
  useEffect, useRef, useState, MouseEvent,
} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ICardProps } from '@/lib/types'
import getFormattedDate from '@/lib/utility/common/getFormattedDate'
import getElapsedTime from '@/lib/utility/common/getElapsedTime'
import BookmarkIcon from '@/components/common/BookmarkIcon'
import addHttpsPrefix from '@/lib/utility/common/addHttpsPrefix'
import * as styles from './index.css'

const Card = ({
  cardLink,
  handleAddToFolder = () => {},
  handleDeleteLink = () => {},
  isMyFolder = false,
}: ICardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isKebabClicked, setIsKebabClicked] = useState(false)
  const kebabRef = useRef<HTMLDivElement | null>(null)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const elapsedTime = getElapsedTime(cardLink.created_at)
  const formattedCreatedAt = getFormattedDate(cardLink.created_at)

  const handleHover = (value: boolean) => {
    return () => {
      setIsHovered(value)
    }
  }

  const toggleKebabClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsKebabClicked((prev) => { return !prev })
  }

  const handleOutsideClick = (e: Event) => {
    if (
      kebabRef.current
      && !kebabRef.current.contains(e.target as Node)
    ) {
      setIsKebabClicked(false)
    }
  }

  const handleEscKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsKebabClicked(false)
    }
  }

  const handleBookmarkToggler = () => {
    setIsBookmarked((prev) => { return !prev })
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('keydown', handleEscKey)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [])

  const cardURL = addHttpsPrefix(cardLink.url)

  return (
    <div
      onMouseEnter={handleHover(true)}
      onMouseLeave={handleHover(false)}
      className={`${styles.container} ${isHovered ? styles.hoveredContainer : ''}`}
    >
      <Link href={cardURL} target="_blank">
        <div className={styles.cardImage}>
          <Image
            className={`${styles.Image} ${isHovered ? styles.hoveredImage : ''}`}
            fill
            src={cardLink.image_source || '/default-card-image.svg'}
            alt={cardLink.title}
          />
        </div>
        <div className={styles.cardText}>
          <div className={styles.firstLine}>
            <div className={styles.elapsedTime}>{elapsedTime}</div>
            <div className={styles.kebabContainer} ref={kebabRef}>
              <button
                type="button"
                className={styles.kebab}
                onClick={toggleKebabClick}
              >
                <Image
                  fill
                  src="/kebab.svg"
                  alt="Menu Icon"
                />
              </button>
              {isKebabClicked && (
              <div className={styles.popup}>
                {isMyFolder && (
                <button
                  className={styles.popupButton}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    handleDeleteLink()
                  }}
                >
                  삭제하기
                </button>
                )}
                <button
                  className={styles.popupButton}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    handleAddToFolder()
                  }}
                >
                  폴더에 추가
                </button>
              </div>
              )}
            </div>
          </div>
          <div className={styles.cardDescription}>{cardLink.description}</div>
          <div className={styles.cardCreatedAt}>{formattedCreatedAt}</div>
        </div>
      </Link>
      <BookmarkIcon
        className={styles.bookmarkIcon}
        isBookmarked={isBookmarked}
        handleClick={handleBookmarkToggler}
      />
    </div>
  )
}

export default Card
