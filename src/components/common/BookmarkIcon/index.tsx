'use client'

import Image from 'next/image'
import { IBookmarkIconProps, ImageType } from '@/lib/types'
import * as styles from './index.css'

const BookmarkIcon = ({
  className = '',
  isBookmarked = false,
  handleClick,
}: IBookmarkIconProps) => {
  const imageProps: ImageType = {
    src: isBookmarked ? '/star-filled.svg' : '/star.svg',
    alt: isBookmarked ? 'Filled Bookmark Icon' : 'Empty Bookmark Icon',
    width: 34,
    height: 34,
  }

  return (
    <button
      type="button"
      className={`${styles.icon} ${className}`}
      onClick={handleClick}
    >
      <Image {...imageProps} />
    </button>
  )
}

export default BookmarkIcon
