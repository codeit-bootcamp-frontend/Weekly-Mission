import api from '@/lib/api'
import { IgetUserProps, UserType } from '@/lib/types'

const getUser = async ({ currentUserId }: IgetUserProps): Promise<UserType> => {
  const res = await api.get<{ data: UserType[] }>(`/users/${currentUserId}`)
  return res.data.data[0]
}

export default getUser
