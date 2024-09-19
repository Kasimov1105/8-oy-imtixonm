import React from 'react'
import { Carusel } from '../components/Carusel'; // Caruselni import qilish
function Hero() {
  return (
      <div className=" mt-16 bg-[url('/hero.jpg')] h-[400px] bg-no-repeat bg-cover">
       <div className='max-w-[1280px]  m-auto'>
        <div className='flex flex-col py-5'>
            <h1 className='text-center text-[#87CEEB] tracking-tighter	font-bold font-["Montserrat"] text-6xl'>CRYPTOFOLIO WATCH LIST</h1>
            <p className='text-[#A9A9A9] mt-3 text-center font-["Montserrat"] text-sm font-medium'>Get all the Info regarding your favorite Crypto Currency</p>
        </div>
        <Carusel/>
       </div>
      </div>
  )
}
export default Hero
