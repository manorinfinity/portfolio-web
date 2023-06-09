import { Inter } from '@next/font/google'
import Navbar from '@/components/layout/Navbar/Navbar'
import Home from '@/components/home/Home'
import Footer from '@/components/layout/Footer/Footer'
import HomeSeo from '@/components/seo/home/head'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import Developer from './developer'
import { useMediaQuery } from '@mui/material'
import { useEffect } from 'react'
import { update } from '@/store/slices/mediaQuerySlice'
import { MediaQuery } from '@/store/actionTypes'

const inter = Inter({ subsets: ['latin'] })

export default function Main() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(update({
      mobile: window.innerWidth < 768,
      tablet: window.innerWidth < 900 && window.innerWidth > 768,
      desktop: window.innerWidth > 900,
      xldisplay: window.innerWidth > 1920,
  }))
  },[])

  return (
    <>
      <HomeSeo />
      <main>
        {/* <Navbar/> */}
        <Developer />
        {/* <Footer inter={inter}/> */}
        {/* <h1>{count}</h1>
        <Button variant='contained' onClick={() => dispatch(increment())}>Increment</Button>
        <Button variant='outlined' onClick={() => dispatch(decrement())}>Decrement</Button> */}
      </main>
    </>
  )
}
