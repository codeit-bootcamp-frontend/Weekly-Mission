import getLinks from '@/lib/api/getLinks'
import SearchBar from '@/components/SearchBar'
import CardContainer from '@/components/CardContainer'
import SharedModals from './ui/SharedModals'
import * as styles from './index.css'

const SharedMain = async () => {
  const cardLinks = await getLinks({ userId: 8, folderId: 8 })

  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <SearchBar
          className={styles.searchBar}
          placeholder="원하는 링크를 검색해 보세요"
        />
        {cardLinks.length > 0
          ? <CardContainer cardLinks={cardLinks} />
          : <div className={styles.emptyMessage}>저장된 링크가 없습니다</div>}
        <SharedModals />
      </div>
    </main>
  )
}

export default SharedMain
