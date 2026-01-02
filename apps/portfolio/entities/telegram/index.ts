import TelegramBot from 'node-telegram-bot-api'

export const telegramBot = process.env.TELEGRAM_BOT_API_TOKEN
  ? new TelegramBot(process.env.TELEGRAM_BOT_API_TOKEN)
  : null
