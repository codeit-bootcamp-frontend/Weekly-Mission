import { CardType, ISharedProps } from '@/lib/types'
import getUser from '@/lib/api/getUser'
import getFolder from '@/lib/api/getFolder'
import getLinks from '@/lib/api/getLinks'
import SharedHeader from '@/components/pages/SharedHeader'
import SharedMain from '@/components/pages/SharedMain'

export const generateMetadata = async ({ searchParams }: ISharedProps) => {
  const { user, folder } = searchParams
  const userId = Number(user)
  const folderId = Number(folder)

  let folderName = ''
  try {
    const { name } = await getFolder({ userId, folderId })
    folderName = name
  } catch (err) {
    console.error(err)
  }

  return { title: `${folderName} | Linkbrary` }
}

const Page = async ({ searchParams }: ISharedProps) => {
  const { user, folder } = searchParams
  const userId = Number(user)
  const folderId = Number(folder)

  let ownerName = ''
  let ownerImage = ''
  let folderName = ''
  let cardLinks: CardType[] = []

  if (userId) {
    try {
      const {
        name: userName,
        image_source: imageSource,
      } = await getUser({ userId }) || {}
      ownerName = userName || ''
      ownerImage = imageSource || ''

      if (folderId) {
        const {
          name: userFolderName,
        } = await getFolder({ userId, folderId }) || {}
        folderName = userFolderName || ''
        cardLinks = await getLinks({ userId, folderId }) || []
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <SharedHeader
        ownerName={ownerName}
        ownerImage={ownerImage}
        folderName={folderName}
      />
      <SharedMain cardLinks={cardLinks} />
    </>
  )
}

export default Page
