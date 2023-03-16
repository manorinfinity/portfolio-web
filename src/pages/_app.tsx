import Loader from '@/components/layout/Loaders/Loader'
import { theme } from '@/mui/theme'
import { persistor, store } from '@/store/store'
import '@/styles/globals.scss'
import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

export default function App({ Component, pageProps }: AppProps) {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    },2000)
  }, [])
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            {loader ?
              <Component {...pageProps} />
              : 
              <Loader/>
            }
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  )
}
