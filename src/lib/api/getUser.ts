import { IgetUserProps, UserType } from '@/lib/types'
import api from '.'

const getUser = async ({ userId }: IgetUserProps): Promise<UserType> => {
  const res = await api.get<{ data: UserType[] }>(`/users/${userId}`)
  return res.data.data[0]
}

export default getUser
