import Head from 'next/head'
import Image from 'next/image'
import AOS from 'aos'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'

export default function Home(props) {

  console.log(props);

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
    </>
  )
}
