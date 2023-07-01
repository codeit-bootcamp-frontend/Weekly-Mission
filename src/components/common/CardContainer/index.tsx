import { ICardContainerProps, CardType } from '@/lib/types'
import Card from '@/components/common/Card'
import * as styles from './index.css'

const CardContainer = ({
  cardLinks,
  handleAddToFolder = () => {},
  handleDeleteLink = () => {},
}: ICardContainerProps) => {
  const renderCard = (cardLink: CardType) => {
    return (
      <Card
        key={cardLink.id}
        cardLink={cardLink}
        handleAddToFolder={handleAddToFolder}
        handleDeleteLink={handleDeleteLink}
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
