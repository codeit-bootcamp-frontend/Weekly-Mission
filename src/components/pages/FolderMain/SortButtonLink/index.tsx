import Link from 'next/link'
import { ISortButtonProps } from '@/lib/types'
import * as styles from './index.css'

const SortButtonLink = ({
  fill,
  folderId,
  folderName,
}: ISortButtonProps) => {
  return (
    <Link href={folderId ? `/folder/${folderId}` : '/folder'}>
      <button
        type="button"
        className={`${styles.button} ${fill ? styles.filled : styles.unFilled}`}
      >
        {folderName}
      </button>
    </Link>
  )
}

export default SortButtonLink
