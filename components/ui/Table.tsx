import Link from 'next/link';
import React from 'react'
import { FaArrowLeft, FaArrowRight, FaPencilAlt, FaRegEye } from 'react-icons/fa';


declare type tableType = {
  header: {
    child      : React.ReactNode;
    dataKey    : string;
    headClass ?: string;
    bodyClass ?: string;
  }[];
  body: object[]
}
// const data = {
//   header: [
//     {child: "Nama", dataKey: 'nama', headClass: 'text-left'},
//     {child: "Actions", dataKey: 'action', headClass: 'text-center w-36', bodyClass: 'flex justify-center'},
//   ],
//   body: [
//     {nama: 'ABCDE1', action: Action()},
//     {nama: 'ABCDE1', action: Action()},
//     {nama: 'ABCDE1', action: Action()},
//   ]
// }

export default function Table({data}: {data: tableType}) {
  return (
    <>
      <div className="block w-full overflow-x-auto">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal w-full">
              {data.header.map((valueHeader, index) => (
                <th key={index} className={`py-3 px-6 ` + valueHeader.headClass}>{valueHeader.child}</th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
              {data.body.map((value, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                  {data.header.map((valueHeader, indexHeader) => {
                    // @ts-ignore
                    return (<td key={indexHeader} className={`py-3 px-6 ` + (valueHeader.bodyClass ?? '')}>{value[valueHeader.dataKey]}</td>);
                  })}
                </tr>
              ))}
          </tbody>
        </table>
      </div>

    
      <div className="flex items-center justify-center py-5 lg:px-0 sm:px-6 px-4">
        <div className="w-full px-6 flex items-center justify-between border-t border-gray-200">
          <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
            <FaArrowLeft width="14" height="8"/>
            <p className="text-sm ml-3 font-medium leading-none ">
              Previous
            </p>
          </div>
          <div className="sm:flex hidden">
            <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-blue-700 border-t border-transparent hover:border-blue-400 pt-3 mr-4 px-2">
              1
            </p>
            <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-blue-700 border-t border-transparent hover:border-blue-400 pt-3 mr-4 px-2">
              2
            </p>
            <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-blue-700 border-t border-transparent hover:border-blue-400 pt-3 mr-4 px-2">
              3
            </p>
            <p className="text-sm font-medium leading-none cursor-pointer text-blue-700 border-t border-blue-400 pt-3 mr-4 px-2">
              4
            </p>
            <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-blue-700 border-t border-transparent hover:border-blue-400 pt-3 mr-4 px-2">
              5
            </p>
          </div>
          <div className="flex items-center pt-3 text-gray-600 hover:text-blue-700 cursor-pointer">
            <p className="text-sm font-medium leading-none mr-3">Next</p>
            <FaArrowRight width="14" height="8"/>
          </div>
        </div>
      </div>
    </>
  )
}
