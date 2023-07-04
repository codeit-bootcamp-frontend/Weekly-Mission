'use client'

import useScrollHandler from '@/lib/hooks/common/useScrollHandler'
import AddLinkBar from './AddLinkBar'
import * as styles from './index.css'

const FolderHeader = () => {
  const exceedThreshold = useScrollHandler({ threshold: 222 })

  return (
    <header className={`${styles.folderHeader} ${exceedThreshold ? styles.bottomHeader : ''}`}>
      <div className={styles.container}>
        <AddLinkBar />
      </div>
    </header>
  )
}

export default FolderHeader
