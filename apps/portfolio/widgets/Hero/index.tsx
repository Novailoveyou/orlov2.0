import 'server-only'

// import { prisma } from '@/shared/database'
import { MyName } from '@/shared/components/my-name'
import { LeadButton } from '@/entities/lead/ui'
import { Section } from '@/shared/components/section'
import { P } from '@/shared/components/p'
import { Underline } from '@/shared/components/underline'

export async function Hero() {
  // const app = await prisma.app.findFirst()

  return (
    <Section id='hero'>
      <MyName />
      <P>
        Principal Engineer | Web Advocate | Creator of Entity.js
        <br />
        Tech Guru
        <br />
        Business tech consultunt
        <br />
        Chief Architect Igna Letucce | Tech Lead
        <br />
        Interface Engineer
        <br />
        Team Lead
        <br />
        Full Stack Web Developer
        <br />
        UX Designer
        <br />
        Front End Web Developer
        <br />
        Full Stack Web Developer specializing in{' '}
        <Underline>TypeScript</Underline>
      </P>
      <LeadButton>Hire Me</LeadButton>
    </Section>
  )
}
