"use client"
import { useHeaderSidebarContext } from "@/contexts/headerSidebar-context";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdHome } from "react-icons/io";
import HeaderProfile from "./HeaderProfile";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const { toggleSidebar, headerBar } = useHeaderSidebarContext();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-3 z-10 px-4 py-2 ${isSticky && `backdrop-blur-md shadow-md rounded-xl bg-white bg-opacity-50`}`}>
      <nav className="block w-full max-w-full bg-transparent text-white shadow-none rounded-xl transition-all px-0 py-1">
        <div className="flex flex-col-reverse justify-between gap-4 md:flex-row md:items-center">
          <div className="capitalize">
            <nav aria-label="breadcrumb" className="w-max">
              <ol className="flex flex-wrap items-center w-full bg-opacity-60 rounded-md bg-transparent p-0 transition-all">
                <li className="flex items-center antialiased font-sans text-sm font-normal leading-normal cursor-pointer">
                  <a href="#">
                    <IoMdHome className="duration-300 opacity-50 transition-all text-blue-900 hover:text-blue-900 hover:opacity-100"/>
                  </a>
                  <span className="text-gray-500 text-sm antialiased font-sans font-normal leading-normal mx-2 pointer-events-none select-none">/</span>
                </li>

                {headerBar.breadCrumb.map((value, index) => index != headerBar.breadCrumb.length - 1 ? (
                  <li key={index} className="flex items-center antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 text-blue-gray-900 hover:text-light-blue-500">
                    <a href="#">
                      <p className="block antialiased font-sans text-sm leading-normal font-normal opacity-50 transition-all text-blue-900 hover:text-blue-500 hover:opacity-100">
                        {value}
                      </p>
                    </a>
                    <span className="text-gray-500 text-sm antialiased font-sans font-normal leading-normal mx-2 pointer-events-none select-none">
                      /
                    </span>
                  </li>
                ) : (
                  <li key={index} className="flex items-center antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 text-blue-900 hover:text-blue-500">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      {value}
                    </p>
                  </li>
                ))}
              </ol>
            </nav>
            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-gray-900">
              {headerBar.pageName}
            </h6>
          </div>

          <hr className={`border-blue-400 border-y-2 transition-colors ease-in-out ${isSticky ? `border-opacity-50` : `border-opacity-0` }`}/>

          <div className="flex items-center">
            <button
              className="ml-auto order-4 relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 grid xl:hidden"
              type="button"
              onClick={() => toggleSidebar()}
            >
              <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <GiHamburgerMenu className="h-5 w-5 text-blue-gray-500" />
              </span>
            </button>
            {/* <button
              className="order-2 md:order-1 relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
              type="button"
            >
              <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <FaGear className="h-4 w-4 text-blue-gray-500" />
              </span>
            </button>
            <button
              className="order-3 md:order-2 relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
              type="button"
            >
              <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <FaBell className="h-4 w-4 text-blue-gray-500" />
              </span>
            </button> */}
            <div className="order-1 md:order-3">
              <HeaderProfile/>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
