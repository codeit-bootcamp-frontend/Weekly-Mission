import Image from 'next/image'
import * as styles from './AccountLogo.css'

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
