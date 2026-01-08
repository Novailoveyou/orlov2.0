'use client'
import 'client-only'

import {
  // Controller,
  FieldValues,
  useForm,
} from 'react-hook-form'

// import {
//   Field,
//   FieldDescription,
//   FieldError,
//   FieldGroup,
//   FieldLabel,
// } from '@/shared/components/field'
// import { Input } from '@/shared/components/input'
// import {
//   InputGroup,
//   InputGroupAddon,
//   InputGroupText,
//   InputGroupTextarea,
// } from '@/shared/components/input-group'
// import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

export const NameInput = <
  FormSchema extends FieldValues,
  Form extends ReturnType<typeof useForm<FormSchema>>,
>({
  form,
}: {
  form: Form
}) => {
  return null
  // return (
  //   <Controller
  //     name='name'
  //     control={form.control}
  //     render={({ field, fieldState }) => (
  //       <Field data-invalid={fieldState.invalid}>
  //         <FieldLabel htmlFor='form-rhf-demo-title'>Name</FieldLabel>
  //         <Input
  //           {...field}
  //           id='form-rhf-demo-title'
  //           aria-invalid={fieldState.invalid}
  //           placeholder='Ivan Ivanov'
  //           autoComplete='off'
  //         />
  //         {/* <VisuallyHidden>
  //               <FieldDescription>
  //                 Provide a concise title for your bug report.
  //               </FieldDescription>
  //             </VisuallyHidden> */}
  //         {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
  //       </Field>
  //     )}
  //   />
  // )
}
