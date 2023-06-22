import { ICardContainerProps, CardType } from '@/lib/types'
import Card from '@/components/Card'
import * as styles from './index.css'

const CardContainer = ({ cardLinks }: ICardContainerProps) => {
  const renderCard = (cardLink: CardType) => {
    return (
      <Card
        key={cardLink.id}
        link={cardLink}
      />
    )
  }

  return (
    <div className={styles.container}>
      {cardLinks.map(renderCard)}
    </div>
  )
}

export default CardContainer
