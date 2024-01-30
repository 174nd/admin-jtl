"use client"
import { useHeaderSidebarContext } from "@/contexts/headerSidebar-context";
import classNames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegUser, FaUserCircle } from "react-icons/fa";
import { FaBell, FaGear } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdHome } from "react-icons/io";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const { toggleSidebar, headerBar } = useHeaderSidebarContext();
  const [dropdown, setDropdown] = useState<boolean>(false);

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
                <li key={Math.random()} className="flex items-center antialiased font-sans text-sm font-normal leading-normal cursor-pointer">
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
              onClick={toggleSidebar}
            >
              <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <GiHamburgerMenu className="h-5 w-5 text-blue-gray-500" />
              </span>
            </button>
            <button
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
            </button>
            <div className="relative group order-1 md:order-3">
              <button
                className="right-0 middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 items-center gap-1 px-4 flex"
                type="button"
                onClick={() => setDropdown(!dropdown)}
              >
                <FaUserCircle className="h-4 w-4 text-blue-gray-500" />
                <span className="lg:pl-1 block">Andi</span>
              </button>


              <div className={dropdown ? `block ` : `hidden ` + `absolute right-0-0 mt-2 w-60`}>
                <div className="bg-white rounded overflow-hidden shadow-lg">
                    <div className="text-center p-6 bg-gray-800 border-b">
                      <FaRegUser className="h-24 w-24 text-white rounded-full mx-auto"/>
                    <p className="pt-2 text-lg font-semibold text-gray-50">John Doe</p>
                    <p className="text-sm text-gray-100">John@Doe.com</p>
                    <div className="mt-5">
                        <div className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >Manage your Account</div>
                    </div>
                    </div>
                    <div className="border-b">
                        <Link href="/account/campaigns" >
                            <div className="px-4 py-2 hover:bg-gray-100 flex">
                                <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">
                                    Campaigns
                                </p>
                                <p className="text-xs text-gray-500">View your campaigns</p>
                                </div>
                            </div>
                        </Link>
                        <Link href="/account/donations" >
                            <div className="px-4 py-2 hover:bg-gray-100 flex">
                                <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">Donations</p>
                                <p className="text-xs text-gray-500">View your last donations</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="">
                        <button className="w-full px-4 py-2 pb-4 hover:bg-gray-100 flex">
                            <p className="text-sm font-medium text-gray-800 leading-none">
                              <FaRegUser className="h-4 w-4 text-gray-800 fill-current animate-spin"/> Logout
                            </p>
                        </button>
                    </div>
                </div>
            </div>

              
              {/* <div className={classNames(dropdown ? "block" : "hidden", "absolute w-full left-0 mt-2 rounded shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1")}>
                  {[
                    {label: "xxx", value: "xxxx"},
                    {label: "xxx", value: "xxxx"},
                    {label: "xxx", value: "xxxx"},
                    {label: "xxx", value: "xxxx"},
                  ].map((v,i) => (
                    <button
                      className={classNames("block px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded bg-gray-100")}
                    >{v.label ?? v.value}</button>
                  ))}
                </div> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
