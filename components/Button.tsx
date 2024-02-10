import Link from 'next/link'
import React from 'react'

export default function Button(props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return (
    <button {...props} className={`flex justify-center items-center gap-2 bg-blue-500 hover:bg-blue-600 rounded-xl text-white py-2 px-6 duration-300 ${props.className}`}>
      {props.children}
    </button>
  )
}


export function ButtonLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link {...props} href={props.href ?? '#'} className={`flex justify-center items-center gap-2 bg-blue-500 hover:bg-blue-600 rounded-xl text-white py-2 px-6 duration-300 ${props.className}`}>
      {props.children}
    </Link>
  )
}
