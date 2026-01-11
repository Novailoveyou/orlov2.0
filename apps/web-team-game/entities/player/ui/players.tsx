'use client'
import 'client-only'
import { usePlayers } from '../hooks/usePlayers'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { Div } from '@repo/ui/components/tags/div'

export const Players = ({ username }: { username: string }) => {
  const { players } = usePlayers()

  if (!players) return null

  const percentage = 66

  return (
    <Div className='flex flex-wrap gap-2 max-w-1/2'>
      {players
        .filter(player => player.username !== username)
        .map(player => (
          <CircularProgressbar
            key={player.username}
            value={percentage}
            text={player.username}
            className='max-w-9'
            styles={buildStyles({
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'butt',

              // Text size
              textSize: '24px',

              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,

              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',

              // Colors
              pathColor: 'var(--color-primary)',
              textColor: 'var(--color-primary)',
              trailColor: 'var(--color-primary-foreground)',
              backgroundColor: 'var(--color-primary-foreground)',
            })}
          />
        ))}
    </Div>
  )
}
