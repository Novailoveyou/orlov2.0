'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/shared/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/shared/components/ui/field'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from '@/shared/components/ui/input-group'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select'
import { CONTENT_MAX, clientTodoSchema } from '../model'
import { useAddTodo } from '../hooks'
import { VisuallyHidden } from 'radix-ui'
import { DatePicker } from '@/shared/components/date-picker'
import { Input } from '@/shared/components/ui/input'

export function TodoForm() {
  const { triggerAddTodo } = useAddTodo()

  const form = useForm<z.infer<typeof clientTodoSchema>>({
    resolver: zodResolver(clientTodoSchema),
    defaultValues: {
      deadline: new Date(),
      priority: 2,
      client: 'mtsbank',
      label: '',
      content: '',
      isDone: false,
    },
  })

  const onSubmit = (todo: z.infer<typeof clientTodoSchema>) => {
    triggerAddTodo(todo)
    form.reset()
  }

  return (
    <Card className='bg-transparent border-0 w-full'>
      <VisuallyHidden.Root>
        <CardHeader>
          <CardTitle>Add Todo</CardTitle>
          <CardDescription>
            Add a todo so you won't forget what needs to be done
          </CardDescription>
        </CardHeader>
      </VisuallyHidden.Root>
      <CardContent>
        <form id='todo-form' onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <div className='flex flex-wrap [&>*]:flex-1 gap-4 [&>*]:basis-[calc(25%-3rem)]'>
              <Controller
                name='deadline'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='todo-form-deadline'>
                      Deadline
                    </FieldLabel>
                    <DatePicker
                      {...field}
                      id='todo-form-deadline'
                      mode='single'
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={field.disabled}
                      onDayBlur={field.onBlur}
                      onDayClick={field.onBlur}
                      onDayFocus={field.onBlur}
                      onDayKeyDown={field.onBlur}
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name='priority'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='todo-form-priority'>
                      Priority
                    </FieldLabel>
                    <Select
                      defaultValue={`${field.value}`}
                      disabled={field.disabled}
                      value={`${field.value}`}
                      onValueChange={value => field.onChange(+value)}
                      onOpenChange={field.onBlur}
                      name={field.name}
                      autoComplete='off'
                      form='todo-form'>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent position='popper'>
                        <SelectGroup>
                          <SelectItem value='1'>1</SelectItem>
                          <SelectItem value='2'>2</SelectItem>
                          <SelectItem value='3'>3</SelectItem>
                          <SelectItem value='4'>4</SelectItem>
                          <SelectItem value='5'>5</SelectItem>
                          <SelectItem value='6'>6</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name='client'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='todo-form-client'>Client</FieldLabel>
                    <Select
                      defaultValue={field.value}
                      disabled={field.disabled}
                      value={field.value}
                      onValueChange={field.onChange}
                      onOpenChange={field.onBlur}
                      name={field.name}
                      autoComplete='off'
                      form='todo-form'>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent position='popper'>
                        <SelectGroup>
                          <SelectItem value='mtsbank'>mtsbank</SelectItem>
                          <SelectItem value='northcode'>northcode</SelectItem>
                          <SelectItem value='start-fit'>start-fit</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name='label'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='todo-form-label'>Label</FieldLabel>
                    <Input
                      {...field}
                      id='todo-form-label'
                      aria-invalid={fieldState.invalid}
                      placeholder='QG'
                      autoComplete='off'
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>
            <Controller
              name='content'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='todo-form-content'>Content</FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id='todo-form-content'
                      placeholder='Make things happen'
                      rows={6}
                      className='min-h-24 resize-none'
                      aria-invalid={fieldState.invalid}
                    />
                    <VisuallyHidden.Root>
                      <InputGroupAddon align='block-end'>
                        <InputGroupText className='tabular-nums'>
                          {field.value.length}/{CONTENT_MAX} characters
                        </InputGroupText>
                      </InputGroupAddon>
                    </VisuallyHidden.Root>
                  </InputGroup>
                  <VisuallyHidden.Root>
                    <FieldDescription>
                      Add clear and short instructions
                    </FieldDescription>
                  </VisuallyHidden.Root>
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
        <Field orientation='horizontal' className='flex justify-end'>
          {/* <Button type='button' variant='outline' onClick={() => form.reset()}>
            Reset
          </Button> */}
          <Button type='submit' form='todo-form' variant='secondary'>
            Add
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
