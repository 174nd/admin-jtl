"use client";
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';

export default function BusinessMap() {
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const [imageDetail, setImageDetail] = useState<string>('hero.jpg');

  const toggle = (index: number) => {
    if(dropdownOpen === index) return setDropdownOpen(null);
    setDropdownOpen(index);
  }

  const hoverImage = (index: number | null) => {
    const image = index != null || dropdownOpen != null ? onData[index as number ?? dropdownOpen].image : 'hero.jpg';
    setImageDetail(image);
  }

  const onData = [
    {title: "AMDK Jatiluhur", image: 'Picture1.jpg', description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis libero possimus accusantium architecto! Sit esse excepturi dolores animi similique, a nesciunt accusantium harum beatae saepe natus architecto incidunt maiores corrupti."},
    {title: "SPAM Biki & Curug (O&M)", image: 'Picture2.jpg', description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis libero possimus accusantium architecto! Sit esse excepturi dolores animi similique, a nesciunt accusantium harum beatae saepe natus architecto incidunt maiores corrupti."},
    {title: "SPAM Marunda", image: 'Picture3.jpg', description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis libero possimus accusantium architecto! Sit esse excepturi dolores animi similique, a nesciunt accusantium harum beatae saepe natus architecto incidunt maiores corrupti."},
  ]
  return (
    <div className='container mx-auto'>
      <div className="bg-gradient-to-b from-blue-300/20 to-white w-full h-10"/>

      
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:pt-24 lg:pb-12 lg:px-6">
        <div className="gap-8 lg:grid lg:grid-cols-2 xl:gap-16 justify-items-start">
          <Image className="hidden w-full h-96 mb-4 rounded-lg lg:mb-0 lg:flex lg:self-start" 
            width={100} height={100} alt="feature image 2"
            src={`/` + imageDetail}
          />

          <div className="text-gray-900 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-900">Peta Bisnis</h2>
            <p className="mb-8 text-gray-900 font-light lg:text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Modi
              necessitatibus maiores aliquid hic quos deleniti!</p>
            <div className="max-w-screen-md mx-auto">
              <div className="grid divide-y divide-gray-900 max-w-xl mx-auto mt-8">

              {onData.map((data,key) => (
                <div className="py-5" key={key}>
                <div 
                  className="flex justify-between items-center font-medium cursor-pointer text-gray-900"
                  onMouseEnter={() => hoverImage(key)}
                  onMouseLeave={() => hoverImage(null)}
                  onClick={() => toggle(key)}
                >
                  <p className="text-gray-900">{data.title}</p>
                  <div className={"text-lg transition" + (key == dropdownOpen ? " rotate-180" : "")}>
                  <AiOutlineDown/>
                    
                  </div>
                </div>
                  <div className={`text-gray-900 mt-3 text-justify lg:text-sm transition-all ` + (key == dropdownOpen ? 'h-auto' : 'h-0 hidden')}>{data.description}</div>
              </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
