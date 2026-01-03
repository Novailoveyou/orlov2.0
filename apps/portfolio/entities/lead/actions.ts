'use server'
import 'server-only'
import { sendTelegramMessage } from '@/shared/actions/telegram/sendMessage'
import { Lead } from './model'

export const sendLeadToTelegram = async (
  key: string,
  { arg: data }: Readonly<{ arg: Lead }>,
) => await sendTelegramMessage(data)

// {
//   const message = await sendTelegramMessage(data)

//   console.log('message: ', message)
//   return data
// }

// import { ClientLead } from './model'
// import { prisma } from '@/prisma'
// import {
//   validateClientLead,
//   validateEmail,
//   validateName,
//   validatePhoneNumber,
// } from './utils'
// import { ServerActionResponse } from '@/shared/types'
// import { Lead } from '@/generated/prisma'
// import { telegramBot } from '@/entities/telegram'

// export const postLeadFetcher = async (
//   key: 'post-lead',
//   {
//     arg: {
//       name: clientName,
//       phoneNumber: clientPhoneNumber,
//       email: clientEmail,
//       ...clientLead
//     },
//   }: { arg: ClientLead },
// ): Promise<ServerActionResponse<ClientLead & Pick<Lead, 'userId'>>> => {
//   if (key !== 'post-lead')
//     return {
//       success: false,
//       errors: {
//         key: 'Incorrect fetcher key',
//       },
//     }

//   const validatingClientLead = validateClientLead(clientLead)
//   if (!validatingClientLead.success) return validatingClientLead

//   const validatingName = validateName(clientName)
//   if (!validatingName.success) return validatingName

//   const validatingPhoneNumber = validatePhoneNumber(clientPhoneNumber)
//   if (!validatingPhoneNumber.success) return validatingPhoneNumber

//   const validatingEmail = validateEmail(clientEmail)
//   if (!validatingEmail.success) return validatingEmail

//   const lead = validatingClientLead.data
//   const name = validatingName.data
//   const phoneNumber = validatingPhoneNumber.data
//   const email = validatingEmail.data

//   const existingPhoneNumber = await prisma.phoneNumber.findUnique({
//     where: {
//       phoneNumber,
//     },
//   })

//   const existingEmail = email
//     ? await prisma.email.findUnique({
//         where: {
//           email,
//         },
//       })
//     : null

//   let userId = '' satisfies Lead['userId']
//   let systemComment = '' satisfies Lead['systemComment']

//   if (existingPhoneNumber && existingEmail) {
//     userId = existingPhoneNumber.userId
//     systemComment = 'User is already known by phone number and email'

//     if (existingPhoneNumber.userId !== existingEmail.userId) {
//       systemComment += `\n\n
//       Users missmatch detected. \n\n
//       ClientPhone's userId: ${existingPhoneNumber.userId} \n\n
//       ClientEmail's userId: ${existingEmail.userId} \n\n
//       Phone: ${phoneNumber} \n\n
//       Email: ${email}
//       `
//     }
//   }

//   if (existingPhoneNumber && !existingEmail) {
//     userId = existingPhoneNumber.userId
//     systemComment = 'User is already known by phone number'
//   }

//   if (!existingPhoneNumber && existingEmail) {
//     userId = existingEmail.userId
//     systemComment = 'User is already known by email'
//   }

//   if (!userId) {
//     const newUser = await prisma.user.create({
//       data: {},
//     })
//     userId = newUser.id
//     systemComment = 'New user'
//   }

//   if (name)
//     await prisma.username.create({
//       data: {
//         name,
//         userId,
//       },
//     })

//   if (!existingPhoneNumber)
//     await prisma.phoneNumber.create({
//       data: {
//         phoneNumber,
//         userId,
//       },
//     })

//   if (email) {
//     if (!existingEmail) {
//       await prisma.email.create({
//         data: {
//           email,
//           userId,
//         },
//       })
//       // send greetings from alt-net
//     } else {
//       // send regular notification from alt-net
//     }
//   }

//   await prisma.lead.create({ data: { ...lead, userId, systemComment } })

//   const data = { ...lead, name, phoneNumber, email, userId } as const

//   try {
//     if (process.env.TELEGRAM_BOT_CHAT_ID)
//       telegramBot?.sendMessage(
//         process.env.TELEGRAM_BOT_CHAT_ID,
//         `
//         \`\`\`json \n
//         ${JSON.stringify(data)} \n
//         \`\`\`
//         `,
//       )
//   } catch (error) {
//     console.error(error)
//     await prisma.error.create({
//       data: {
//         message: 'entities/lead/actions/postLeadFetcher',
//         additionalInfo: `${typeof error === 'object' ? JSON.stringify(error) : error}`,
//       },
//     })
//   }

//   return {
//     success: true,
//     data,
//   }
// }
