import 'server-only'

import { name } from '../../package.json'

export const APP_NAME = name

export const LINKS = {
  root: '/',
  portfolio: '/portfolio',
  skills: '/skills',
  stories: '/stories',
  chat: '/chat',
  // TODO: termsOfService terms of service link
  termsOfService: '/',
  // TODO: add privacyPolicy of service link
  privacyPolicy: '/',
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
  /** /app */
  /** widgets */
  hero: 'hero',
  /** /widgets */
} as const
