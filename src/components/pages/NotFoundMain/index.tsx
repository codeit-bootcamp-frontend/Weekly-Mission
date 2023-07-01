import ButtonLink from '@/components/common/ButtonLink'
import * as styles from './index.css'

const NotFoundMain = () => {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        찾을 수 없는 페이지입니다.
        <br />
        요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨습니다.
      </div>
      <ButtonLink href="/">홈으로 이동</ButtonLink>
    </main>
  )
}

export default NotFoundMain
