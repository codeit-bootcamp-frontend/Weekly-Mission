import Image from 'next/image'
import { ISharedHeaderProps } from '@/lib/types'
import * as styles from './index.css'

const SharedHeader = ({
  ownerName,
  ownerImage,
  folderName,
}: ISharedHeaderProps) => {
  return (
    <header className={styles.container}>
      <div className={styles.image}>
        <Image
          fill
          src={ownerImage}
          alt={`${ownerName}'s Profile`}
        />
      </div>
      <p className={styles.name}>{`@${ownerName}`}</p>
      <h2 className={styles.folder}>{folderName}</h2>
    </header>
  )
}

export default SharedHeader
