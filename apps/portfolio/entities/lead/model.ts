export type LeadStore = {
  lead: {
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
  'username' | 'phoneNumber' | 'telegram' | 'email' | 'description'
>
