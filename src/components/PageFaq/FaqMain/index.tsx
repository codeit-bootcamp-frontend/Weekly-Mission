import ButtonLink from '@/components/ButtonLink'
import * as styles from './index.css'

const FaqMain = () => {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        FAQ
      </div>
      <ButtonLink href="/">홈으로 이동</ButtonLink>
    </main>
  )
}

export default FaqMain
