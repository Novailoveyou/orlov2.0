'use server'

import { LEAD_KEY } from './constants'
import { Lead } from './model'

export type ServerActionResponse<Data> = {
  success: true
  data: Data
}

export const leadFetcher = async (
  key: typeof LEAD_KEY,
  {
    arg: { username, phoneNumber, email, telegram, description },
  }: { arg: Lead },
): Promise<ServerActionResponse<Lead & { userId: string }>> => {
  return {
    success: true,
    data: {
      userId: '',
      username,
      phoneNumber,
      email,
      telegram,
      description,
    },
  }
}
