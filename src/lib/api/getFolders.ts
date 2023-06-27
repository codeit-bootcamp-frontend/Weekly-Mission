import api from '@/lib/api'
import { FolderType, IgetFoldersProps } from '@/lib/types'

const getFolders = async ({ userId }: IgetFoldersProps): Promise<FolderType[]> => {
  const res = await api.get<{ data: FolderType[] }>(`/users/${userId}/folders`)
  return res.data.data
}

export default getFolders
