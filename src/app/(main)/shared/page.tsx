import { CardType, ISharedProps } from '@/lib/types'
import getLinks from '@/lib/api/getLinks'
import SharedHeader from '@/components/pages/SharedHeader'
import SharedMain from '@/components/pages/SharedMain'

export const metadata = {
  title: '즐겨찾기 | Linkbrary',
}

const Page = async ({ searchParams }: ISharedProps) => {
  const { user, folder } = searchParams
  let cardLinks: CardType[] = []
  if (user && folder) {
    cardLinks = await getLinks({ userId: Number(user), folderId: Number(folder) })
  }

  return (
    <>
      <SharedHeader />
      <SharedMain cardLinks={cardLinks} />
    </>
  )
}

export default Page
