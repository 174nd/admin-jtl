"use client";

import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import { ImCross } from 'react-icons/im';
import SidebarItem from './siderbar-item';
import { sidebarContent } from './siderbar-content';
import { useHeaderSidebarContext } from '@/contexts/headerSidebar-context';

export default function Sidebar() {
  const { sidebarStatus, toggleSidebar } = useHeaderSidebarContext();
  
  const wrapperRef = useRef<any>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (sidebarStatus && wrapperRef.current && !wrapperRef.current?.contains(event.target)) toggleSidebar();
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef, toggleSidebar, sidebarStatus]);


  return (
    <>
      <aside ref={wrapperRef} className={`bg-gradient-to-br from-sky-300 via-sky-400 to-blue-500 fixed inset-0 z-30 my-4 ml-4 h-[calc(100vh-32px)] w-64 rounded-xl transition-transform duration-300 xl:translate-x-0 ${!sidebarStatus && `-translate-x-80`} bg-black/50`}>
      <div className="relative border-b border-white/20">
        <a className="flex items-center gap-3 py-6 px-5" href="#/">
            <Image alt="icon" width={10} height={10} className="w-6 h-6 md:w-10 md:h-10"
              src={"/logo.svg"}
            />
          <h6 className="block antialiased tracking-normal font-sans text-lg font-bold leading-relaxed text-white">Jasa Tirta Luhur</h6>
        </a>
        <button className="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden" type="button" onClick={toggleSidebar}>
          <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <ImCross className="h-4 w-4 text-white" />
          </span>
        </button>
      </div>
      <div className="m-4 flex flex-col justify-between flex-grow">
        <ul className="mb-4 flex flex-col gap-1">
          {sidebarContent.map((value, index) => <SidebarItem item={value} key={index}/>)}
          {/* {sidebarContent.map((v,i) => (SidebarItem({item: v, key: i})))} */}
        </ul>
      </div>
    </aside>
  </>
  )
}
