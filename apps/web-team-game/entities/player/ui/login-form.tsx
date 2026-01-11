'use client'

import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { toast } from '@/shared/components/sonner'
import * as z from 'zod'

import { Button } from '@repo/ui/components/shadcnui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/shadcnui/card'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@repo/ui/components/shadcnui/field'
import { Input } from '@repo/ui/components/shadcnui/input'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from '@repo/ui/components/shadcnui/input-group'
import { useLogin } from '../hooks/useLogin'

const formSchema = z.object({
  username: z
    .string()
    .min(3, 'Имя должно содержать не менее 3-ех символов.')
    .max(32, 'Имя не может превышать 32 символа'),
})

export function LoginForm() {
  const { login, isLoginMutating, triggerLogin } = useLogin()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    triggerLogin(data.username).catch(error => console.error(error))
  }

  React.useEffect(() => {
    if (login && !login?.success)
      toast.error(
        login?.message || 'Не удалось войти. Пожалуйста, попробуйте еще раз.',
      )
  }, [login])

  return (
    <Card className='w-full sm:max-w-md'>
      <CardHeader>
        <CardTitle>Добро пожаловать в МТС Банк!</CardTitle>
        <CardDescription>Интерактивная Презентация WEB26</CardDescription>
      </CardHeader>
      <CardContent>
        <form id='login-form' onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name='username'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='login-form-username'>Имя</FieldLabel>
                  <Input
                    {...field}
                    type='text'
                    id='login-form-username'
                    aria-invalid={fieldState.invalid}
                    placeholder='Максим'
                    autoComplete='off'
                    autoFocus
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation='horizontal'>
          <Button type='submit' form='login-form'>
            {isLoginMutating ? 'Загрузка...' : 'Присоединиться'}
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
