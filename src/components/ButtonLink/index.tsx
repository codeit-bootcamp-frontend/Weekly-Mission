import Link from 'next/link'
import { IButtonLinkProps } from '@/lib/types'
import * as styles from '@/components/Button/Button.css'

const ButtonLink = ({ className = '', children, ...props }: IButtonLinkProps) => {
  return (
    <Link className={`${styles.button} ${className}`} {...props}>
      {children}
    </Link>
  )
}

export default ButtonLink
