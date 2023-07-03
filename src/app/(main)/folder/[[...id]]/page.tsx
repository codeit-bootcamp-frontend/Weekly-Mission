import { CardType, IFolderProps } from '@/lib/types'
import getLinks from '@/lib/api/getLinks'
import FolderMain from '@/components/pages/FolderMain'
import FolderHeader from '@/components/pages/FolderHeader'

export const metadata = {
  title: '내 폴더 | Linkbrary',
}

const Page = async ({ params }: IFolderProps) => {
  const folderId = params?.id?.[0] ?? '0'
  let cardLinks: CardType[] = []
  try {
    cardLinks = await getLinks({ userId: 8, folderId: Number(folderId) })
  } catch (err) {
    console.error(err)
  }

  return (
    <>
      <FolderHeader />
      <FolderMain
        folderId={folderId}
        cardLinks={cardLinks}
      />
    </>
  )
}

export default Page
