import { telegramBot } from '.'

// figure out mutationPost wrapper
export const sendTelegramMessage = async <Data>(data: Data) => {
  try {
    if (process.env.TELEGRAM_BOT_CHAT_ID)
      return await telegramBot?.sendMessage(
        process.env.TELEGRAM_BOT_CHAT_ID,
        `
          \`\`\`json \n
          ${JSON.stringify(data)} \n
          \`\`\`
          `,
      )
  } catch (error) {
    console.error('Failed to send Telegram message:', error)
  }
}
