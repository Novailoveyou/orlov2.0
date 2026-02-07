import { toast } from 'sonner'
import { v4 as uuidv4 } from 'uuid'

export const parseError = (error: unknown) => {
  if (error instanceof Error) return error

  if (typeof error === 'string') return new Error(error)

  return new Error('Unknown error')
}

export const toastError = (error: unknown, id = uuidv4()) => {
  const parsedError = parseError(error)

  toast.error(parsedError.name, {
    id,
    description: parsedError.message,
  })
}

export const handleError = (error: unknown) => toastError(error)

export const objectKeys = <Obj extends Record<string, unknown>>(
  obj: Obj,
): (keyof Obj)[] => Object.keys(obj) as (keyof Obj)[]
