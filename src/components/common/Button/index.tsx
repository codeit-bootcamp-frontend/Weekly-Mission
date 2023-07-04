import { IButtonProps } from '@/lib/types'
import * as styles from './index.css'

const Button = ({
  type = 'button',
  className = '',
  children,
  ...props
}: IButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
