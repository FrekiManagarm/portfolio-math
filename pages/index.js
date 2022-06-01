import Head from 'next/head'
import Image from 'next/image'
import AOS from 'aos'
import { useEffect } from 'react'
import Navigation from '../components/Navigation/Navigation'
import Header from '../components/Header/Header'
import Work from '../components/Work/Work'
import Stack from '../components/Stack/Stack'
import Contact from '../components/Contact/Contact'

export default function Home() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <>
      <Navigation />
      <Header />
      <Work />
      <Stack />
      <Contact />
    </>
  )
}
