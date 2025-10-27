export type LeadStore = {
  lead: {
    id: string
    setUserId: (name: LeadStore['lead']['id']) => void
    username: string
    setUsername: (name: LeadStore['lead']['username']) => void
    phoneNumber: string
    setPhoneNumber: (phoneNumber: LeadStore['lead']['phoneNumber']) => void
    telegram: string
    setTelegram: (telegram: LeadStore['lead']['telegram']) => void
    email: string
    setEmail: (email: LeadStore['lead']['email']) => void
    description: string
    setDescription: (description: LeadStore['lead']['description']) => void
  }
}

export type Lead = Pick<
  LeadStore['lead'],
  'id' | 'username' | 'phoneNumber' | 'telegram' | 'email' | 'description'
>
