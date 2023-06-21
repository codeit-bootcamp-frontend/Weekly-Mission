import Link from 'next/link'
import getUser from '@/lib/api/getUser'
// import ButtonLink from '@/components/ButtonLink'
import NavLogo from './ui/NavLogo'
import NavUserProfile from './ui/NavUserProfile'
import * as styles from './index.css'

const Nav = async () => {
  const {
    name: userName,
    image_source: userImage,
    email: userEmail,
  } = await getUser({ userId: 8 })

  return (
    <nav className={styles.container}>
      <Link href="/">
        <NavLogo />
      </Link>
      <NavUserProfile
        userImage={userImage}
        userName={userName}
        userEmail={userEmail}
      />
      {/* <ButtonLink className={styles.styledButtonLink} href="/signin">
        로그인
      </ButtonLink> */}
    </nav>
  )
}

export default Nav
