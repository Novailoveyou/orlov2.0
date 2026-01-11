'use client'
import 'client-only'

import { useMutation } from '@/shared/api'
import { login } from '../actions/login'

export const useLogin = () =>
  useMutation('/login', login, {
    entity: 'login',
  })
