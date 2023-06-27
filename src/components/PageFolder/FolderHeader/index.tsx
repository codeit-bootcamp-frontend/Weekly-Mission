'use client'

import useScrollHandler from '@/lib/hooks/useScrollHandler'
import AddLinkBar from './feature/AddLinkBar'
import * as styles from './index.css'

const FolderHeader = () => {
  const exceedThreshold = useScrollHandler(222)

  return (
    <header className={`${styles.folderHeader} ${exceedThreshold ? styles.bottomHeader : ''}`}>
      <div className={styles.container}>
        <AddLinkBar />
      </div>
    </header>
  )
}

export default FolderHeader
