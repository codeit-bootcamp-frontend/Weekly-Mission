import api from '@/lib/api'
import { IgetUserProps, UserType } from '@/lib/types'

const getUser = async ({
  userId,
}: IgetUserProps) => {
  const res = await api.get<{ data: UserType[] }>(
    `/users/${userId}`,
  )
  return res.data.data[0]
}

export default getUser
