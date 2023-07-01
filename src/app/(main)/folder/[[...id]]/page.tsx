import { CardType, IFolderProps } from '@/lib/types'
import getLinks from '@/lib/api/getLinks'
import FolderMain from '@/components/pages/FolderMain'
import FolderHeader from '@/components/pages/FolderHeader'

const Page = async ({ params }: IFolderProps) => {
  let cardLinks: CardType[] = []
  if (params.id) {
    cardLinks = await getLinks({ userId: 8, folderId: Number(params.id[0]) })
  }

  return (
    <>
      <FolderHeader />
      <FolderMain cardLinks={cardLinks} />
    </>
  )
}

export default Page
