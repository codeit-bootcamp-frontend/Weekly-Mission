import Image from 'next/image'
import Button from '@/components/Button'
import * as styles from './index.css'

const AddLinkBar = () => {
  return (
    <form className={styles.searchForm}>
      <div className={styles.shareIcon}>
        <Image
          fill
          src="/link.svg"
          alt="Link Icon"
        />
      </div>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="링크를 추가해 보세요"
      />
      <Button className={styles.searchButton} type="submit">추가하기</Button>
    </form>
  )
}

export default AddLinkBar
