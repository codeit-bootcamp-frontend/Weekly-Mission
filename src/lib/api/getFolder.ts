import api from '@/lib/api'
import { FolderType, IgetFolderProps } from '@/lib/types'

const getFolder = async ({ userId, folderId }: IgetFolderProps): Promise<FolderType> => {
  const res = await api.get<{ data: FolderType[] }>(`/users/${userId}/folders/${folderId}`)
  return res.data.data[0]
}

export default getFolder
