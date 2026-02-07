import { ThemeProvider } from '@/shared/components/theme-provider'
import { Toaster } from '@/shared/components/ui/sonner'
import { ModeToggle } from '@/shared/components/mode-toggle'
import { StoreProvider } from '@/app/store/provider'
import { IndexedDBProvider } from '@/app/indexeddb/provider'
import { HomeView } from '@/views/HomeView'
import { SWRConfig } from '@/shared/components/swr-config'
import { Container } from '@/shared/components/container'

function App() {
  return (
    <StoreProvider>
      <IndexedDBProvider>
        <SWRConfig>
          <ThemeProvider>
            <div className='flex flex-col flex-wrap justify-between min-h-dvh'>
              <main>
                <HomeView />
              </main>
              <footer>
                <Container>
                  <ModeToggle />
                </Container>
              </footer>
            </div>
            <Toaster />
          </ThemeProvider>
        </SWRConfig>
      </IndexedDBProvider>
    </StoreProvider>
  )
}

export default App
