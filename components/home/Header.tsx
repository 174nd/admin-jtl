import Image from 'next/image'
import React from 'react'
import { ButtonLink } from '../ui/Button'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-transparent absolute t-0 l-0 w-full flex items-center z-10">
    <div className="container mx-auto py-4">
      <div className="flex intems-center justify-between ">
        <div className="px-4">
          <Link href="/" className="font-bold text-lg text-primary-500 flex items-center">
            <Image src="/logo.svg" width={100} height={100} className="h-6 w-6 mr-3 sm:h-9" alt="Landwind Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-transparent bg-gradient-to-r from-sky-700 via-sky-600 to-blue-500 bg-clip-text">Jasa Tirta Luhur</span>
          </Link>
        </div>

        <div className="flex items-center px-4">
          <button id="hamburger" name="hamburger" type="button" className="block absolute right-4 lg:hidden">
            <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
            <span className="hamburger-line transition duration-300 ease-in-out"></span>
            <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
          </button>

          <nav id="nav-menu"
            className="hidden absolute bg-white shadow-lg rounded-lg max-w-[200px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none transition duration-300 ease-in-out">
            <ul className="block lg:flex lg:gap-10">
              <li className="group">
                <Link href="/strukturPerusahaan" className="text-base textneutral-900 flex group-hover:text-blue-500">Struktur Perusahaan</Link>
              </li>
              <li className="group">
                <a href="#blog" className="text-base textneutral-900 flex group-hover:text-blue-500">Blog</a>
              </li>
              <li className="group">
                <a href="#contact"
                  className="text-base textneutral-900 flex group-hover:text-blue-500">Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        <ButtonLink href='/login'>Login</ButtonLink>
      </div>
    </div>
  </header>
  )
}
