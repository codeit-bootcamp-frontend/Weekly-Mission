import { CardType, IFolderMainProps } from '@/lib/types'
import getLinks from '@/lib/api/getLinks'
import CardContainer from '@/components/CardContainer'
import SharedModals from '@/components/PageShared/SharedMain/ui/SharedModals'
import * as styles from './index.css'

const FolderMain = async ({
  userId,
  folderId,
}: IFolderMainProps) => {
  let cardLinks: CardType[] = []
  if (folderId) {
    cardLinks = await getLinks({ userId, folderId })
  }

  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        {cardLinks.length > 0
          ? <CardContainer cardLinks={cardLinks} />
          : <div className={styles.emptyMessage}>저장된 링크가 없습니다</div>}
        <SharedModals />
      </div>
    </main>
  )
}

export default FolderMain
