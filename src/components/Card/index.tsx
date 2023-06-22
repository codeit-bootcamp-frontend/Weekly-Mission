'use client'

import {
  useEffect, useRef, useState, MouseEvent,
} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import getFormattedDate from '@/lib/utility/getFormattedDate'
import getElapsedTime from '@/lib/utility/getElapsedTime'
import { ICardProps } from '@/lib/types'
import BookmarkIcon from '@/components/BookmarkIcon'
import * as styles from './index.css'

const Card = ({ link }: ICardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isKebabClicked, setIsKebabClicked] = useState(false)
  const kebabRef = useRef<HTMLDivElement | null>(null)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const elapsedTime = getElapsedTime(link.createdAt)
  const formattedCreatedAt = getFormattedDate(link.createdAt)

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

  return (
    <div
      onMouseEnter={handleHover(true)}
      onMouseLeave={handleHover(false)}
      className={`${styles.container} ${isHovered ? styles.hoveredContainer : ''}`}
    >
      <Link href={link.url} target="_blank">
        <div className={styles.cardImage}>
          <Image
            className={`${styles.Image} ${isHovered ? styles.hoveredImage : ''}`}
            fill
            src={link.image_source || '/default-card-image.svg'}
            alt={link.title}
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
                <button
                  className={styles.popupButton}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                  }}
                >
                  삭제하기
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                  }}
                >
                  폴더에 추가
                </button>
              </div>
              )}
            </div>
          </div>
          <div className={styles.cardDescription}>{link.description}</div>
          <div className={styles.cardCreatedAt}>{formattedCreatedAt}</div>
        </div>
      </Link>
      <BookmarkIcon
        className={styles.bookmarkIcon}
        isBookmarked={isBookmarked}
        onClick={handleBookmarkToggler}
      />
    </div>
  )
}

export default Card
