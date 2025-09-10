import styles from './page.module.css'
import { Button } from '@repo/ui/components/button'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className='text-3xl'>docs</h1>
        <Button appName='docs' className='bg-amber-950'>
          Button
        </Button>
      </main>
      <footer className={styles.footer}>&copy; novailoveyou</footer>
    </div>
  )
}
