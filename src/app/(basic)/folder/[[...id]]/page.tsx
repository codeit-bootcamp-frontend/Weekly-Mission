import { IFolderProps } from '@/lib/types'
import FolderHeader from '@/components/PageFolder/FolderHeader'
import FolderMain from '@/components/PageFolder/FolderMain'

const Page = ({ params }: IFolderProps) => {
  let folderId = null
  if (params.id) {
    [folderId] = params.id
  }

  return (
    <>
      <FolderHeader />
      <FolderMain
        userId={8}
        folderId={Number(folderId)}
      />
    </>
  )
}

export default Page
