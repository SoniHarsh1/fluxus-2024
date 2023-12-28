import Image from 'next/image'
import Hero from '@/components/Hero'
import Technicals from '@/components/Technicals'
import Footer from '@/components/Footer'
export default function Home() {
  return (
    <div>
      <Hero/>
      <Technicals/>
      <Footer/>
    </div>
  )
}
