import Image from 'next/image';
import React from 'react';

export default function CompanyBusiness() {
  return (
    <div className='bg-gradient-to-b from-sky-500 via-sky-400 to-blue-300/20 pb-48'>
      <div className='w-full h-48 -mt-24'/>
      <h2 className='font-extrabold text-5xl w-full text-center mb-2 p-3 text-white'>Company Business</h2>
      <p className="text-lg text-center max-w-2xl mt-6 mb-14 mx-auto font-light text-gray-200">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis temporibus rerum quas eveniet sit doloremque ea.
      </p>


      <div className="mb-3 sm:mb-8 last:mb-0 flex flex-col items-center gap-12">
        {[
          {title: 'Provide Clean Water', imageUrl: '/Picture1.jpg', description: 'Mollit irure deserunt ipsum qui enim proident ad velit duis anim ex. Culpa et duis adipisicing ut anim labore veniam nisi dolore labore voluptate. Cillum nostrud officia adipisicing ipsum non ad cupidatat veniam. Exercitation veniam labore aliquip eu. Lorem aliquip sint dolor excepteur occaecat officia mollit anim aute occaecat dolor et.'},
          {title: 'Bottled Drinking Water “JATILUHUR”', imageUrl: '/Picture2.jpg', description: 'Quis ad veniam ad non. Amet labore officia minim exercitation nostrud reprehenderit ad ad. Ad sit pariatur deserunt aliqua aliqua cupidatat exercitation duis in commodo. Proident do adipisicing tempor id cillum cupidatat aute ad pariatur ullamco.'},
          {title: 'Operational & Maintenance WTP and Distribustion Network', imageUrl: '/Picture3.jpg', description: 'Consectetur consectetur minim tempor qui minim officia ullamco Lorem amet exercitation adipisicing. Tempor consequat officia voluptate velit fugiat pariatur nulla eu officia. Elit eu veniam id ut id exercitation nulla in id ipsum. Proident ex duis magna ex. Mollit aliqua dolore quis aute reprehenderit laborum consequat nulla esse.'},
          {title: 'Construction Services', imageUrl: '/Picture4.png', description: 'Duis occaecat laborum eiusmod duis sit esse deserunt cillum. Aliqua cillum occaecat Lorem consectetur minim sit mollit voluptate cillum. Proident cillum ullamco elit tempor sint enim cupidatat do proident. Aute ex minim dolore fugiat ut fugiat nostrud dolore dolore labore.'},
        ].map((value, key) => (
            <section className="group w-[48rem] bg-gray-100 border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20" key={key}>
              <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[60%] flex flex-col h-full sm:group-even:ml-[18rem]">
                <h3 className="text-2xl font-semibold">{value.title}</h3>
                <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                  {value.description}
                </p>
              </div>

              <Image
                src={value.imageUrl}
                alt="Project I worked on"
                width={100} height={100}
                quality={95}
                className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                  transition 
                  group-hover:scale-[1.04]
                  group-hover:-translate-x-3
                  group-hover:translate-y-3
                  group-hover:-rotate-2

                  group-even:group-hover:translate-x-3
                  group-even:group-hover:translate-y-3
                  group-even:group-hover:rotate-2

                  group-even:right-[initial] group-even:-left-40"
              />
            </section>
        ))}
      </div>
    </div>
  )
}
