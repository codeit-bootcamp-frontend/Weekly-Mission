import Image from 'next/image'
import getUser from '@/lib/api/getUser'
import getFolder from '@/lib/api/getFolder'
import * as styles from './index.css'

const SharedHeader = async () => {
  const {
    name: ownerName,
    image_source: ownerImage,
  } = await getUser({ userId: 8 })
  const {
    name: folderName,
  } = await getFolder({ userId: 8, folderId: 8 })

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
