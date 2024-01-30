import React, { useState } from 'react'

export default function Checkbox({value, label, onClick} : {value?: string, label: string, onClick?: (set: string, checkStatus: boolean) => void}) {
  const [isChecked, setIsChecked] = useState(false);
  return (
      <label className="inline-flex items-center mt-3 cursor-pointer">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" checked={isChecked} onClick={()=> {
            setIsChecked(!isChecked);
            if(typeof onClick !== 'undefined') onClick(value ?? label, !isChecked);
            }}/><span className="ml-2 text-gray-700">{label}</span>
      </label>
  )
}
