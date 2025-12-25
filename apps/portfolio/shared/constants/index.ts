import 'server-only'

import { name } from '../../package.json'

export const APP_NAME = name

export const LINKS = {
  root: '/',
  portfolio: '/portfolio',
  skills: '/skills',
  stories: '/stories',
  chat: '/chat',
} as const

export const IDS = {
  home: 'home',
  hero: 'hero',
  portfolio: 'portfolio',
  skills: 'skills',
  stories: 'stories',
  chat: 'chat',
} as const
