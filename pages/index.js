import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hearder from '@/components/Hearder'
import Carousel from '@/components/Carousel'
import SafeSpace from '@/components/SafeSpace'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <>
 
      <main className="">
        <Navbar/>
        <Hearder/>
        <SafeSpace/>
        <div className='overflow-x-auto my-[8rem]'>
        <Carousel/>
        </div>
        <Footer/>
      </main>
    </>
  )
}
