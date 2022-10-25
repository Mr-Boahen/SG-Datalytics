import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>SG DATALYTICS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='sticky top-4'>
        <NavBar/>
      </div>
      

    
    </div>
  )
}

export default Home
