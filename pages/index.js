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

export async function getServerSideProps(ctx) {

  const response = await fetch('http://localhost:8000/api/events-Une?limit=6');

  const data = await response.json();

  return {
    props: {
      data
    }
  }
}
