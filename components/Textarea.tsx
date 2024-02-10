import React, { useEffect, useRef, useState } from 'react';

export default function Textarea(props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
  
  ) {
  const [value, setValue] = useState(props.value);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "0px";
      const scrollHeight = textAreaRef.current.scrollHeight;
      textAreaRef.current.style.height = scrollHeight + "px";
    }
  }, [value]);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;
    setValue(val);
  };


  return (
    <textarea
        {...props}
        ref={textAreaRef}
        spellCheck={false}
        onChange={e => {handleChange(e); props.onChange !== undefined && props.onChange(e)}}
        className={`${props.className} bg-transparent px-4 py-2 rounded border border-transparent focus:shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500 overflow-y-hidden resize-none transition-all`}
        value={value}
      />
  )
}
