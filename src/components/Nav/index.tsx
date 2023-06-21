import Link from 'next/link'
// import ButtonLink from '@/components/ButtonLink'
import getUser from './data-access/getUser'
import NavLogo from './ui/NavLogo'
import NavUserProfile from './ui/NavUserProfile'
import * as styles from './index.css'

const Nav = async () => {
  const {
    name: userName,
    image_source: userImage,
    email: userEmail,
  } = await getUser({ currentUserId: 1 })

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
