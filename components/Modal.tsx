import { useHeaderSidebarContext } from "@/contexts/headerSidebar-context";
import React, { useEffect, useRef } from "react";

type ModalType = {
  openModal: boolean;
  closeModal: () => void;
  children?: React.ReactNode;
};

export default function Modal({ children, openModal, closeModal }: ModalType) {
  const { removeModal } = useHeaderSidebarContext();

  const wrapperRef = useRef<any>(null);

  const onCloseModal = () => {
    closeModal();
    removeModal();
  };

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        openModal &&
        wrapperRef.current?.children &&
        !Array.from(wrapperRef.current.children)
        .reduce((r,d: any) => r || d.contains(event.target), false)
      ) onCloseModal();
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef, openModal, removeModal, onCloseModal]);

  return (
    <div className={(openModal ? `fixed` : `hidden`) + ` inset-0 z-50 bg-black/30 backdrop-blur-sm overflow-y-scroll !m-0`}>
      <div className="w-full overflow-hidden flex justify-center mx-auto sm:my-10" ref={wrapperRef}>
        {children}
      </div>
    </div>
  );
}
