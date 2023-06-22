import api from '@/lib/api'
import { IGetLinksProps, CardType } from '@/lib/types'

const getLinks = async ({ userId, folderId }: IGetLinksProps): Promise<CardType[]> => {
  const res = await api.get<{ data: CardType[] }>(`/users/${userId}/links?folderId=${folderId}`)
  return res.data.data
}

export default getLinks
