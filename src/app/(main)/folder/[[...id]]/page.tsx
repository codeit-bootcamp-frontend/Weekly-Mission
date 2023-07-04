import { CardType, FolderType, IFolderProps } from '@/lib/types'
import getFolders from '@/lib/api/getFolders'
import getLinks from '@/lib/api/getLinks'
import FolderMain from '@/components/pages/FolderMain'
import FolderHeader from '@/components/pages/FolderHeader'

export const metadata = {
  title: '내 폴더 | Linkbrary',
}

const Page = async ({ params }: IFolderProps) => {
  const folderId = params?.id?.[0] ?? '0'
  let cardLinks: CardType[] = []
  let folders: FolderType[] = []
  try {
    folders = await getFolders({ userId: 8 })
    cardLinks = await getLinks({ userId: 8, folderId: Number(folderId) })
  } catch (err) {
    console.error(err)
  }

  return (
    <>
      <FolderHeader />
      <FolderMain
        folderId={folderId}
        folders={folders}
        cardLinks={cardLinks}
      />
    </>
  )
}

export default Page
