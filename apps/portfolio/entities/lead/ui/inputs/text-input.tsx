'use client'
import 'client-only'

import { Controller, FieldValues, useForm } from 'react-hook-form'

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
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { ComponentProps } from 'react'

type TextInputProps<Values extends FieldValues> = ComponentProps<
  ComponentProps<typeof Controller<Values>>['render']
>

export const TextInput = <Values extends FieldValues>({
  field,
  fieldState,
  formState,
}: TextInputProps<Values>) => {
  return (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor='form-rhf-demo-title'>Name</FieldLabel>
      <Input
        {...field}
        id='form-rhf-demo-title'
        aria-invalid={fieldState.invalid}
        placeholder='Ivan Ivanov'
        autoComplete='off'
      />
      <VisuallyHidden>
        <FieldDescription>
          Provide a concise title for your bug report.
        </FieldDescription>
      </VisuallyHidden>
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )
}
