import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className={`w-full h-[90vh] relative flex justify-center overflow-hidden`}>
      <Image alt='' src="/hero.jpg" width={1080} height={1080} className={`absolute h-screen w-full -z-10 -bottom-0`}/>
      <div className="absolute top-0 h-full w-full bg-gradient-to-r from-sky-300/30 via-sky-400/30 to-blue-500/30 -z-10"/>
      <div className="absolute -z-10 bottom-0 w-full bg-gradient-to-b from-transparent via-white/30 to-white h-48"></div>

      <div className="container w-full flex flex-col items-center">
        <h1 className='text-8xl font-bold whitespace-nowrap text-center text-transparent bg-gradient-to-r from-sky-700 via-sky-600 to-blue-500 bg-clip-text mt-64'>
          Jasa Tirta Luhur
          {/* JASA TIRTA LUHUR */}
        </h1>

        <p className="text-xl text-center max-w-2xl mt-6 font-light text-gray-500">
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis temporibus rerum quas eveniet sit doloremque ea. */}
          Menjadi Perusahaan Terbaik di Indonesia dalam bidang Penyediaan Air Bersih bagi Generasi kita di Masa Mendatang
        </p>
      </div>
    </div>
  )
}
