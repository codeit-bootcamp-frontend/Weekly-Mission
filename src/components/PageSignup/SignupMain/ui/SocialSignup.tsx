import Image from 'next/image'
import * as styles from './SocialSignup.css'

const SocialSignup = () => {
  return (
    <div className={styles.container}>
      <p>다른 방식으로 가입하기</p>
      <div className={styles.iconContainer}>
        <a
          href="https://www.google.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className={styles.icon}>
            <Image
              fill
              src="/link-google.svg"
              alt="Google Icon"
            />
          </div>
        </a>
        <a
          href="https://www.kakaocorp.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className={styles.icon}>
            <Image
              fill
              src="/link-kakaotalk.svg"
              alt="Kakaotalk Icon"
            />
          </div>
        </a>
      </div>
    </div>
  )
}

export default SocialSignup
