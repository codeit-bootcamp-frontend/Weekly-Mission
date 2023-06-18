import Link from 'next/link'
import Image from 'next/image'
import * as styles from './SocialSignup.css'

const SocialSignup = () => {
  return (
    <div className={styles.container}>
      <p>다른 방식으로 가입하기</p>
      <div className={styles.iconContainer}>
        <Link href="https://www.google.com/">
          <div className={styles.icon}>
            <Image
              fill
              src="/link-google.svg"
              alt="Google Icon"
            />
          </div>
        </Link>
        <Link href="https://www.kakaocorp.com/">
          <div className={styles.icon}>
            <Image
              fill
              src="/link-kakaotalk.svg"
              alt="Kakaotalk Icon"
            />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default SocialSignup
