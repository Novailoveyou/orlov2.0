import { createSlice } from '@/app/_store/utils'
import { LeadStore } from './model'

export const leadSlice = createSlice<LeadStore>(set => ({
  lead: {
    username: '',
    setUsername: username =>
      set(state => {
        state.lead.username = username
      }),
    phoneNumber: '',
    setPhoneNumber: phoneNumber =>
      set(state => {
        state.lead.phoneNumber = phoneNumber
      }),
    telegram: '',
    setTelegram: telegram =>
      set(state => {
        state.lead.telegram = telegram
      }),
    email: '',
    setEmail: email =>
      set(state => {
        state.lead.email = email
      }),
    description: '',
    setDescription: description =>
      set(state => {
        state.lead.description = description
      }),
  },
}))
