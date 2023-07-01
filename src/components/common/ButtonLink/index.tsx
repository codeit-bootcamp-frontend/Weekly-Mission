import Link from 'next/link'
import { IButtonLinkProps } from '@/lib/types'
import * as styles from './index.css'

const ButtonLink = ({
  className = '',
  children,
  href,
  ...props
}: IButtonLinkProps) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${className}`}
      {...props}
    >
      <Link href={href}>
        {children}
      </Link>
    </button>
  )
}

export default ButtonLink
