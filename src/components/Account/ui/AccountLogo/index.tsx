import Image from 'next/image'
import * as styles from './index.css'

const AccountLogo = () => {
  return (
    <div className={styles.logo}>
      <Image
        fill
        src="/logo.svg"
        alt="Linkbrary Logo"
      />
    </div>
  )
}

export default AccountLogo
