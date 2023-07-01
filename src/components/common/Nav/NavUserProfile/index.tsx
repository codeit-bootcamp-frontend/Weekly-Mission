import Image from 'next/image'
import Link from 'next/link'
import { INavUserProfileProps } from '@/lib/types'
import * as styles from './index.css'

const NavUserProfile = ({
  userImage,
  userName,
  userEmail,
}: INavUserProfileProps) => {
  return (
    <div className={styles.profile}>
      <Link href="/my-link">
        <div className={styles.profileImage}>
          <Image
            fill
            src={userImage}
            alt={`${userName}'s Profile`}
          />
        </div>
      </Link>
      <p className={styles.profileEmail}>{userEmail}</p>
    </div>
  )
}

export default NavUserProfile
