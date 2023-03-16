import { Inter } from '@next/font/google'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import DeveloperSeo from '@/components/seo/developer/head'
import HeroSection from '@/components/developer/HeroSection/HeroSection'
import { NextFont } from '@next/font'
import AboutSection from '@/components/developer/AboutSection/AboutSection'
import CaseStudy from '@/components/developer/CaseStudy/CaseStudy'
import Skillset from '@/components/developer/Skillset/Skillset'
import Experience from '@/components/developer/Experience/Experience'
import Contact from '@/components/developer/Contact/Contact'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'

const inter:NextFont = Inter({ subsets: ['latin'] })

export default function Developer() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const scroll = useScroll();
  console.log(scroll);
  return (
    <>
      <DeveloperSeo/>
      <motion.div className='developer-container'>
        <HeroSection/>
        <AboutSection/>
        {/* <CaseStudy/>  */}
        <Skillset/>
        <Experience/>
        <Contact/>
      </motion.div>
    </>
  )
}
