import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function Dropdown({className, placeholder, data}: {className?: string | undefined, placeholder?: string; data: {value: string, label?: string}[]}) {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [selectId, setSelectId] = useState<number | null>(null);
  const [dropdownValue, setDropdownValue] = useState<string>(placeholder ?? "Select");
  
  const wrapperRef = useRef<any>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (dropdown && wrapperRef.current && !wrapperRef.current?.contains(event.target)) setDropdown(!dropdown);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef, dropdown]);


  const onSelected = (id: number, val: string) => {
    setDropdown(!dropdown);
    setDropdownValue(val);
    setSelectId(id);
  }

  return (
    <div className="relative group" ref={wrapperRef}>
      <button
        // onFocus={() => setDropdown(true)}
        // onBlur={() => dropdown && setDropdown(false)}
        onClick={() => setDropdown(!dropdown)}
        className={(className && className + ' ') + `inline-flex items-center justify-between px-4 py-2 w-52 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm  focus:outline-none focus:border-blue-500`}>
        <span className={`mr-2 w-full text-left`}>{dropdownValue}</span>
        <FaChevronDown className={classNames("w-3 h-3 mt-1 ml-2 -mr-1 duration-300", dropdown && "rotate-180")} />
      </button>
      <div
        className={classNames(dropdown ? "block" : "hidden", "absolute w-full left-0 mt-2 rounded shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1")}
      >
        {data.map((v,i) => (
          <button
            key={i}
            className={classNames("block px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded", selectId == i && "bg-gray-100")}
            onClick={() => onSelected(i, v.value)}
          >{v.label ?? v.value}</button>
        ))}
      </div>
    </div>
  )
}
