import ButtonLink from '@/components/common/ButtonLink'
import * as styles from './index.css'

const MyLinkMain = () => {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        내 링크
      </div>
      <ButtonLink href="/">홈으로 이동</ButtonLink>
    </main>
  )
}

export default MyLinkMain
