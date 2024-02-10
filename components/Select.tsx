import React, { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { HiChevronUpDown } from "react-icons/hi2";


type selectData = {value: string, label?: string, status?: boolean};
type SelectType = {
  className?: string | undefined,
  placeholder?: string, 
  data: selectData[]
}


export default function Select(props: SelectType) {
  // const data = [
  //   {value: "ABCDE1", label: "ABCDE1", status: false},
  //   {value: "ABCDE2", label: "ABCDE2", status: false},
  //   {value: "ABCDE3", label: "ABCDE3", status: false},
  //   {value: "ABCDE4", label: "ABCDE4", status: false},
  // ]

  const [listData, setListData] = useState<selectData[]>(props.data);
  const [listVisible, setListVisible] = useState<boolean>(false);
  const [listHover, setListHover] = useState<number | null | 'clear'>(null);
  // const [listHover, setListHover] = useState<number | null>(props.data.findIndex(x => x.status as boolean ?? false) ?? null);
  const [listSelected, setListSelected] = useState<number | null>(null);



  const wrapperRef = useRef<any>(null);
  const inputRef = useRef<any>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (listVisible && wrapperRef.current && !wrapperRef.current?.contains(event.target)) setListVisible(!listVisible);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef, listVisible]);

  return (
    <div className={`relative ${props.className}`} ref={wrapperRef}>
      <span className="inline-block w-full rounded-md shadow-sm">
        <button
          onFocus={() => {
            setListVisible(!listVisible);
            setListData(props.data);
            inputRef.current.focus();
          }}
          className={`relative z-0 w-full pr-10 text-left transition duration-150 ease-in-out bg-white border  rounded-md cursor-default focus:outline-none focus:shadow-outline-blue sm:text-sm sm:leading-5 ${listVisible ? `outline-none border-blue-500` : `border-gray-300`}`}
        >
          <span className="block truncate"></span>

          <input
            ref={inputRef}
            placeholder={listSelected != null ? props.data[listSelected].label ?? props.data[listSelected].value : props.placeholder ?? `Select`}
            onChange={() => {
                const setData = props.data.filter(x => (x.label ?? x.value).toLowerCase().includes(inputRef.current.value.toLowerCase()));
                setListData(setData);
              if(inputRef.current.value == ''){
                setListHover(listSelected);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'ArrowUp') {
                setListHover(listHover != 0 ? listHover as number - 1 : props.data.length - 1)
              } else if (e.key === 'ArrowDown') {
                setListHover(listHover as number + 1 != props.data.length ? listHover as number + 1 : 0);
              }else if(e.key === 'Enter'){
                setListSelected(listHover as number);
                setListVisible(false);
                inputRef.current.blur();
              }else if(e.key == 'Tab'){
                setListVisible(false);
              }
            }}
            type="search"
            className={`px-4 py-[0.66rem] text-base rounded-md w-full h-full form-control focus:outline-none placeholder: ${listSelected != null && `placeholder-black`}`}
          />

          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <HiChevronUpDown className="w-5 h-5 text-gray-400" />
          </span>
        </button>
      </span>

      <div
        // x-show="open"
        // x-transition:leave="transition ease-in duration-100"
        // x-transition:leave-start="opacity-100"
        // x-transition:leave-end="opacity-0"
        // x-cloak
        className={`absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg ${!listVisible && `hidden`}`}
      >
        <ul
          // x-ref="listbox"
          // @keydown.enter.stop.prevent="selectOption()"
          // @keydown.arrow-up.prevent="focusPreviousOption()"
          // @keydown.arrow-down.prevent="focusNextOption()"
          // role="listbox"
          // :aria-activedescendant="focusedOptionIndex ? name + 'Option' + focusedOptionIndex : null"
          // tabindex="-1"
          className="py-1 overflow-auto text-base leading-6 rounded-md shadow-xs max-h-60 focus:outline-none sm:text-sm sm:leading-5"
        >
          {listData.length == 0 ? (
            <div className="px-3 py-2 text-gray-900 cursor-default select-none"
            >Data Not Found!</div>
          ) : (
            <>
            
            {listData.length == props.data.length && listSelected != null && (
              <li 
                onMouseEnter={() => setListHover('clear')}
                onClick={() => {setListSelected(null); setListVisible(false)}}
                className={`relative py-2 pl-3 cursor-default select-none pr-9 ${listHover == 'clear' ? `text-white bg-gray-600`: `text-gray-900`}`}
              >
                <span className={`block font-normal truncate`}>Clear Data</span>
              </li>
            )}
            
            
            
            
            
            {listData.map((dataValue, dataIndex) => (
              
              <li key={dataIndex}
                onMouseEnter={() => setListHover(dataIndex)}
                onClick={() => {setListSelected(dataIndex); setListVisible(false)}}
                className={`relative py-2 pl-3 cursor-default select-none pr-9 ${listHover == dataIndex ? `text-white bg-indigo-600`: `text-gray-900`}`}
              >
                <span className={`block font-normal truncate ${listHover == dataIndex && `font-semibold`}`}>{dataValue.label ?? dataValue.value}</span>
                {listSelected == dataIndex && (
                  <span className={`absolute inset-y-0 right-0 flex items-center pr-4 ${listHover == dataIndex ? `text-white`: `text-indigo-600`}`}>
                    <FaCheck className="w-5 h-5" />
                  </span>
                )}
              </li>
    
              ))}
            
            </>
          )}

        </ul>
      </div>
    </div>
  );
}
