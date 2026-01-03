import 'server-only'

import { name } from '../../package.json'
export * from '@repo/ui/constants/index'

export const APP_NAME = name

export const LINKS = {
  root: '/',
  portfolio: '/portfolio',
  skills: '/skills',
  stories: '/stories',
  chat: '/chat',
  terms: '/terms',
  privacy: '/privacy',
  external: {
    github: 'https://github.com/novailoveyou',
    linkedIn: 'https://www.linkedin.com/in/novailoveyou/',
  },
  email: {
    default: 'mailto:novailoveyou3@gmail.com',
  },
} as const

export const IDS = {
  /** app */
  home: 'home',
  portfolio: 'portfolio',
  skills: 'skills',
  stories: 'stories',
  chat: 'chat',
  lead: 'lead',
  privacy: 'privacy',
  terms: 'terms',
  /** /app */
  /** widgets */
  hero: 'hero',
  /** /widgets */
} as const
