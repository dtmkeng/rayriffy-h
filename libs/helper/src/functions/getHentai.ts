import { getRawHentai } from './getRawHentai'

import { Hentai } from '../@types/Hentai'
import { rawHentaiToHentai } from './rawHentaiToHentai'

export const getHentai = async (
  id: number | string,
  server?: boolean
): Promise<Hentai> => {
  const rawHentai = await getRawHentai(id, server)

  return rawHentaiToHentai(rawHentai)
}
