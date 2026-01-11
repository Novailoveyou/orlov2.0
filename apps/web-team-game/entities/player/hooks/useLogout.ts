'use client'
import 'client-only'

import { useMutation } from '@/shared/api'
import { logout } from '../actions/logout'

export const useLogout = () =>
  useMutation('/logout', logout, {
    entity: 'logout',
  })
