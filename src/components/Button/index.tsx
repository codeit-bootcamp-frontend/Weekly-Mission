import { IButtonProps } from '@/lib/types'
import * as styles from './Button.css'

const Button = ({ className = '', children, ...props }: IButtonProps) => {
  return (
    <button type="button" className={`${styles.button} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
