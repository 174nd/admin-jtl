import Image from 'next/image'
import React from 'react'

export default function ContactUs() {
  return (
    <div className={`relative bg-cover bg-center backdrop-blur-sm pb-14`}>
      <div className="h-full w-full absolute -z-10">
        <div className="h-full w-full absolute bg-blue-500/30 backdrop-blur-xl"/>
        <div className="bg-gradient-to-b from-white to-transparent h-24 absolute w-full"/>
        <Image src='/bg-login.jpeg' alt="" width={100} height={100} className='h-full w-full'/>
      </div>
      <div className='container mx-auto pt-24'>
        <div className="mx-24 mb-16 rounded-xl p-8 bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500">
          
          <h2 className="mb-4 text-3xl font-extrabold tracking-tigh text-white w-full text-center">Contact Us</h2>
          <p className="font-light lg:text-lg text-white w-4/6 text-center mx-auto">Lorem ipsum dolobr sit amet consectetur
            adipisicing elit. Vitae perferendis deleniti tenetur, deserunt itaque veniam provident quod ipsa.</p>

          <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-10 lg:pt-8 lg:pb-4 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="w-full">
                <div className="rounded-lg bg-white py-10 px-8 shadow-xl flex flex-col gap-4">
                  <div>
                    <h4 className="block text-xs text-dark">Email Address</h4>
                    <p><a href="#">support@startup.com</a></p>
                  </div>
                  <div>
                    <h4 className="block text-xs text-dark">Office Location</h4>
                    <p>Jl. Insinyur H. Juanda No.124 D, RT.002/RW.007, Margahayu, Kec. Bekasi Tim., Kota Bks, Jawa Barat 17113</p>
                  </div>
                  <div>
                    <h4 className="block text-xs text-dark">Phone Number</h4>
                    <p><a href="#">+009 8754 3433 223</a></p>
                  </div>
                  <div>
                    <h4 className="block text-xs text-dark">Skype Email</h4>
                    <p><a href="#">admin@jtl.com</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="w-full h-full">
                <object className="w-full h-full rounded-lg border-0"
                  data="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15864.533406645787!2d107.0084875!3d-6.2461521!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698f2a626d2cbf%3A0x8f16843cd49b9aee!2sPT%20Jasa%20Tirta%20Luhur!5e0!3m2!1sid!2sid!4v1692878059642!5m2!1sid!2sid"></object>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      {/* <svg className="fill-white" viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,70L40,60C80,50,160,30,240,25C320,20,400,30,480,35C560,40,640,40,720,33.3C800,27,880,13,960,15C1040,17,1120,33,1200,38.3C1280,43,1360,37,1440,31.7C1520,27,1600,23,1680,30C1760,37,1840,53,1920,53.3C2000,53,2080,37,2160,28.3C2240,20,2320,20,2400,18.3C2480,17,2560,13,2640,25C2720,37,2800,63,2880,63.3C2960,63,3040,37,3120,33.3C3200,30,3280,50,3360,55C3440,60,3520,50,3600,48.3C3680,47,3760,53,3840,56.7C3920,60,4000,60,4080,53.3C4160,47,4240,33,4320,25C4400,17,4480,13,4560,21.7C4640,30,4720,50,4800,50C4880,50,4960,30,5040,26.7C5120,23,5200,37,5280,43.3C5360,50,5440,50,5520,48.3C5600,47,5680,43,5720,41.7L5760,40L5760,100L5720,100C5680,100,5600,100,5520,100C5440,100,5360,100,5280,100C5200,100,5120,100,5040,100C4960,100,4880,100,4800,100C4720,100,4640,100,4560,100C4480,100,4400,100,4320,100C4240,100,4160,100,4080,100C4000,100,3920,100,3840,100C3760,100,3680,100,3600,100C3520,100,3440,100,3360,100C3280,100,3200,100,3120,100C3040,100,2960,100,2880,100C2800,100,2720,100,2640,100C2560,100,2480,100,2400,100C2320,100,2240,100,2160,100C2080,100,2000,100,1920,100C1840,100,1760,100,1680,100C1600,100,1520,100,1440,100C1360,100,1280,100,1200,100C1120,100,1040,100,960,100C880,100,800,100,720,100C640,100,560,100,480,100C400,100,320,100,240,100C160,100,80,100,40,100L0,100Z"></path>
      </svg> */}
    </div>
  )
}
