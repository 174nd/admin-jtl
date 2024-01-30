import React, { useEffect, useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";

export default function HeaderProfile() {
  const [dropdown, setDropdown] = useState<boolean>(false);

  const wrapperRef = useRef<any>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (dropdown && wrapperRef.current && !wrapperRef.current?.contains(event.target)) setDropdown(!dropdown);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef, setDropdown, dropdown]);


  return (
    <div className="relative" ref={wrapperRef}>
      <button
        className="right-0 middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3 rounded-lg text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 items-center gap-1 px-4 flex"
        type="button" onClick={() => setDropdown(!dropdown)}
      >
        <FaUserCircle className="h-5 w-5 text-blue-gray-500" />
        <span className="lg:pl-1 block">Andi Lewis Pratama</span>
      </button>

      <div className={(dropdown ? `block ` : `hidden `) + `absolute md:right-0 md:left-auto left-0 mt-2 w-60 transition-transform ease-in-out duration-300`}>
        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="text-center px-6 py-4 border-b bg-gradient-to-br from-sky-300 via-sky-400 to-blue-500">
            <FaUserCircle className="h-24 w-24 text-white mx-auto" />
            <p className="pt-2 text-lg font-semibold text-gray-50">
              Andi Lewis Pratama
            </p>
            <p className="text-xs text-gray-100">
              Teknik dan Perencanaan (Pusat)
            </p>

            <Link href="/dashboard/profile">
              <div className="border rounded-full mt-5 py-2 px-4 text-sm font-semibold text-gray-100 hover:bg-white hover:text-sky-400">
                Profile
              </div>
            </Link>
          </div>

          <Link href="/" className="w-full px-4 py-4 hover:bg-gray-100 flex justify-center">
            <span className="text-sm font-medium text-gray-800 leading-none">
              Logout
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
