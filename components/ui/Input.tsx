'use client';
import React, { ButtonHTMLAttributes, DetailedHTMLProps, useRef, useState } from 'react';
import Image from "next/image";

export default function Input(props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  return (
    <input {...props} className={`px-4 py-2 rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500 transition ${props.className}`}/>
  )
}
export function InputImagePreview(props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  const [imageProfile, setImageProfile] = useState<string>(props.value as string ?? '/user-image.jpg');
  const inputRef = useRef<any>(null);
  return (
    <button 
      {...props}
      className={`relative overflow-hidden group ${props.className}`}
      onClick={e => {inputRef.current.click(); if(props.onClick != undefined) props.onClick(e)}}
    >
      <Image width={300} height={300} alt='' className="h-full w-full" src={imageProfile}/>
      <input type="file" accept="image/*" ref={inputRef} className="hidden" onChange={(e) => {
        const file = e.target.files![0];
        const reader = new FileReader();
        reader.onload = (e) => setImageProfile(e.target!.result as string);
        reader.readAsDataURL(file as Blob);
      }} />
      <span className="absolute top-0 opacity-0 group-hover:opacity-100 flex transition-all items-center justify-center h-full w-full bg-gray-500/50 text-white">Change Image</span>
    </button>
  )
}
