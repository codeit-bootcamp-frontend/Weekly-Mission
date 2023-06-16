import Image from 'next/image'
import Link from 'next/link'
import ButtonLink from '@/components/ButtonLink'
import * as styles from './Nav.css'

const Nav = () => {
  return (
    <nav className={styles.container}>
      <Link href="/">
        <div className={styles.logoImage}>
          <Image
            fill
            src="/logo.svg"
            alt="Library Logo"
          />
        </div>
      </Link>
      <ButtonLink className={styles.styledButtonLink} href="/signin">
        로그인
      </ButtonLink>
    </nav>
  )
}

export default Nav
