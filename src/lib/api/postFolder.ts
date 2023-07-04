import api from '@/lib/api'
import { IpostFolderProps, PostFolderType } from '@/lib/types'

const postFolder = async ({
  name,
  userId,
}: IpostFolderProps) => {
  const res = await api.post<{ data: PostFolderType[] }>('/folders', {
    name,
    userId,
  })
  if (res.data) {
    const { data } = res.data
    return data
  }

  throw new Error('Failed to create folder')
}

export default postFolder
