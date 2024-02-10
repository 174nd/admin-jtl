import React, { useEffect, useRef, useState } from 'react';

export default function Textarea(props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>) {
  return (
    <textarea
        {...props}
        spellCheck={false}
        className={`${props.className} bg-transparent px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 outline-none overflow-y-hidden transition-colors`}
      />
  )
}

export function TextareaAutoHeight(props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>) {
  const [value, setValue] = useState(props.value);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // TODO auto height error
  useEffect(() => {
    if (textAreaRef.current) {
      const xxxx = textAreaRef.current.value;
      textAreaRef.current.value = 'xixix';
      const already = textAreaRef.current.style.height;
      textAreaRef.current.style.height = "0px";
      textAreaRef.current.value = xxxx;
      const scrollHeight = textAreaRef.current.scrollHeight;
      console.log('xxx', scrollHeight, already)
      // textAreaRef.current.style.height = scrollHeight + "px";
      textAreaRef.current.style.height = (scrollHeight > 0 ? scrollHeight + "px" : already);

    }
  }, [textAreaRef, value]);


  
  // useEffect(() => {
  //   if (textAreaRef.current) {
  //     textAreaRef.current.style.height = "0px";
  //     const scrollHeight = textAreaRef.current.scrollHeight;
  //     textAreaRef.current.style.height = scrollHeight + "px";
  //   }
  // }, [textAreaRef, value]);

  // useEffect(() => {
  //   const textarea = textAreaRef.current;
  //   if (textarea) {
  //     const updateHeight = () => {
  //       const desiredHeight = textarea.scrollHeight;
  //       if (height !== desiredHeight) {
  //         setHeight(desiredHeight);
  //       }
  //     };
  //     textarea.addEventListener('input', updateHeight);
  //     updateHeight(); // Set initial height
  //     return () => textarea.removeEventListener('input', updateHeight);
  //   }
  // }, [value]);




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
        className={`${props.className} bg-transparent px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 outline-none overflow-y-hidden resize-none transition-all`}
        value={value}
      />
  )
}