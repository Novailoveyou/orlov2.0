import { TodoForm } from '@/entities/todo/ui/form'
import { Todos } from '@/entities/todo/ui/todos'
import { Container } from '@/shared/components/container'
import { Section } from '@/shared/components/section'

export const HomeView = () => {
  return (
    <div className='flex flex-col flex-wrap gap-4 py-4'>
      <Section>
        <Container>
          <TodoForm />
        </Container>
      </Section>
      <Section>
        <Container>
          <Todos />
        </Container>
      </Section>
    </div>
  )
}
