import React from 'react';

export default function Input(props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  let className, onProps;
  if(props?.className != undefined){
    const {className: y, ...x} = props;
    className = y; onProps = x;
  }else{
    onProps = props;
  }
  return (
    <input className={`px-4 py-2 rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500 transition ${className}`}  {...onProps}/>
  )
}
