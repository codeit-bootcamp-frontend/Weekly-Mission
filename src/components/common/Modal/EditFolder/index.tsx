'use client'

import Button from '@/components/common/Button'
import * as styles from './index.css'

const EditFolder = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h2 className={styles.modalTitle}>폴더 이름 변경</h2>
      <input className={styles.modalInput} placeholder="유용한 팁" />
      <Button>변경하기</Button>
    </form>
  )
}

export default EditFolder
