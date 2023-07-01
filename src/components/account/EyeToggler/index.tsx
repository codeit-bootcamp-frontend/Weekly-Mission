import Image from 'next/image'
import { IEyeTogglerProps } from '@/lib/types'
import * as styles from './index.css'

const EyeToggler = ({ ...props }: IEyeTogglerProps) => {
  return (
    <button
      type="button"
      className={styles.eyeToggler}
      {...props}
    >
      <Image
        fill
        src="/eye.svg"
        alt="Eye Toggler"
      />
    </button>
  )
}

export default EyeToggler
