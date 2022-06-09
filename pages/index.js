import Head from 'next/head'
import Image from 'next/image'
import AOS from 'aos'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Skills from '../components/Skills'
import About from '../components/About'

export default function Home() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <>
      <Head>
        <title>Mathieu Chambaud | Portfolio</title>
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
    </>
  )
}
