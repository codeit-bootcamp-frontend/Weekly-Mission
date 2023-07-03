import { ISortButtonProps } from '@/lib/types'
import * as styles from './index.css'

const SortButton = ({
  fill = false,
  children,
}: ISortButtonProps) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${fill ? styles.filled : styles.unFilled}`}
    >
      {children}
    </button>
  )
}

export default SortButton
