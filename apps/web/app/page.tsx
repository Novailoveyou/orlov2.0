import styles from './page.module.css'
import { Button } from '@repo/ui/button'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>web</h1>
        <Button appName='web'>Button</Button>
      </main>
      <footer className={styles.footer}>&copy; novailoveyou</footer>
    </div>
  )
}
