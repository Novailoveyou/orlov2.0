'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { toast } from '@/shared/components/sonner'
import * as z from 'zod'

import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/shared/components/field'
import { Input } from '@/shared/components/input'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from '@/shared/components/input-group'
import { LeadButton } from './inputs/lead-button'
import { useId } from 'react'
// import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { TextInput } from './inputs/text-input'
import { useLocale } from 'next-intl'
import { LOCALE_TO_COUNTRY_MAP } from '@/shared/components/lang-toggle-dropdown'
import { PhoneInput } from '@/shared/components/phone-input'
import { toUpperCase } from '@repo/ui/utils/index'
import { useLead } from '../hooks'
import { v4 as uuidv4 } from 'uuid'

const formSchema = z.object({
  name: z
    .string()
    .min(3, 'Bug title must be at least 5 characters.')
    .max(32, 'Bug title must be at most 32 characters.'),
  // TODO: figure out a way to work with validatorjs
  phone: z.e164(),
  email: z.email('Please provide a valid email address.'),
})

export function LeadForm() {
  const locale = useLocale()
  const id = useId()

  const { isLeadMutating, leadError, triggerLead } = useLead()

  const isError = !isLeadMutating && leadError

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast('You submitted the following values:', {
      description: (
        <pre className='bg-code mt-2 p-4 rounded-md w-[320px] overflow-x-auto text-code-foreground'>
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })

    triggerLead({
      id: uuidv4(),
      username: data.name,
      phoneNumber: data.phone,
      email: data.email,
      description: '',
      telegram: '',
    })
  }

  return (
    <form
      id={id}
      className='mx-auto w-full max-w-[90%]'
      onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          name='name'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor='form-rhf-name'>Name</FieldLabel>
              <Input
                {...field}
                id='form-rhf-name'
                type='text'
                aria-invalid={fieldState.invalid}
                placeholder='Ivan Ivanov'
                // autoComplete='off'
              />
              {/* <VisuallyHidden>
                <FieldDescription>
                  Provide a concise title for your bug report.
                </FieldDescription>
              </VisuallyHidden> */}
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name='phone'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor='form-rhf-phone'>Phone</FieldLabel>
              {/* <Input
                {...field}
                id='form-rhf-phone'
                aria-invalid={fieldState.invalid}
                placeholder='Ivan Ivanov'
                autoComplete='off'
              /> */}
              <PhoneInput
                {...field}
                id='form-rhf-phone'
                aria-invalid={fieldState.invalid}
                placeholder='111 222 3333'
                // autoComplete='off'
                defaultCountry={toUpperCase(
                  LOCALE_TO_COUNTRY_MAP[locale] || locale,
                )}
              />
              {/* <VisuallyHidden>
                <FieldDescription>
                  Provide a concise title for your bug report.
                </FieldDescription>
              </VisuallyHidden> */}
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name='email'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor='form-rhf-email'>Email</FieldLabel>
              <Input
                {...field}
                type='email'
                id='form-rhf-email'
                aria-invalid={fieldState.invalid}
                placeholder='example@domain.com'
                // autoComplete='off'
              />
              {/* <VisuallyHidden>
                <FieldDescription>
                  Provide a concise title for your bug report.
                </FieldDescription>
              </VisuallyHidden> */}
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        {/* <Controller
              name='description'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='form-rhf-demo-description'>
                    Description
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id='form-rhf-demo-description'
                      placeholder="I'm having an issue with the login button on mobile."
                      rows={6}
                      className='resize-none min-h-24'
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align='block-end'>
                      <InputGroupText className='tabular-nums'>
                        {field.value.length}/100 characters
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldDescription>
                    Include steps to reproduce, expected behavior, and what
                    actually happened.
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            /> */}
        <Field orientation='horizontal'>
          <LeadButton form={id} isLoading={isLeadMutating} isError={isError} />
        </Field>
      </FieldGroup>
    </form>
  )
}
