import { Inter } from '@next/font/google'
import Navbar from '@/components/layout/Navbar/Navbar'
import Home from '@/components/home/Home'
import Footer from '@/components/layout/Footer/Footer'
import HomeSeo from '@/components/seo/home/head'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'

const inter = Inter({ subsets: ['latin'] })

export default function Main() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch()

  return (
    <>
      <HomeSeo/>
      <main>
        <Navbar/>
        <Home/>
        {/* <Footer inter={inter}/> */}
        {/* <h1>{count}</h1>
        <Button variant='contained' onClick={() => dispatch(increment())}>Increment</Button>
        <Button variant='outlined' onClick={() => dispatch(decrement())}>Decrement</Button> */}
      </main>
    </>
  )
}
