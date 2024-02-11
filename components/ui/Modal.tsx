import { useHeaderSidebarContext } from "@/contexts/headerSidebar-context";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

type ModalType = {
  openModal: boolean;
  closeModal: () => void;
  children?: React.ReactNode;
};

export default function Modal({ children, openModal, closeModal }: ModalType) {
  const { removeModal } = useHeaderSidebarContext();

  const wrapperRef = useRef<any>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        openModal &&
        wrapperRef.current?.children &&
        !Array.from(wrapperRef.current.children)
        .reduce((r,d: any) => r || d.contains(event.target), false)
      ) {
        closeModal();
        removeModal();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef, openModal, closeModal, removeModal]);

  return (
    <motion.div 
    animate={openModal ? `visible` : `hidden`}
    transition={{duration: 0.2, ease: 'easeInOut'}}
    variants={{
      hidden  : { opacity: 0 },
      visible : { opacity: 1 },
    }} className={`${openModal ? `fixed` : `hidden`} inset-0 z-50 bg-black/30 backdrop-blur-sm overflow-y-scroll !m-0`}>
      <div className="w-full flex justify-center mx-auto sm:my-10" ref={wrapperRef}>
        {children}
      </div>
    </motion.div>



  );
}
