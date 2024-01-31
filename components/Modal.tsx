import { useHeaderSidebarContext } from "@/contexts/headerSidebar-context";
import React, { useEffect, useRef } from "react";
import { ImCross } from "react-icons/im";

type ModalType = {
  title: string | React.ReactNode;
  openModal: boolean;
  closeModal: () => void;
  children?: React.ReactNode;
};

export default function Modal({ title, children, openModal, closeModal }: ModalType) {
  const { addModal, removeModal } = useHeaderSidebarContext();

  const wrapperRef = useRef<any>(null);

  const onCloseModal = () => {
    closeModal();
    removeModal();
  };

  useEffect(() => {
    if (openModal == true) addModal();

    function handleClickOutside(event: any) {
      if (
        openModal &&
        wrapperRef.current &&
        !wrapperRef.current?.contains(event.target)
      ) onCloseModal();
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef, openModal, addModal, removeModal, onCloseModal]);
  return (
    <div className={(openModal ? `fixed` : `hidden`) + ` inset-0 z-50 bg-black/30 backdrop-blur-sm overflow-y-scroll`}>
      <div className="w-full max-w-xl overflow-hidden mx-auto my-10" ref={wrapperRef}>
        <div className="relative overflow-hidden bg-white shadow-md rounded-lg border border-gray-400">

        <div className="px-5 py-3 border-b border-gray-200 flex justify-between">
          <h2 className="text-xl font-semibold text-gray-600">{title}</h2>


          <button
            className="cursor-pointertext-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
            onClick={() => onCloseModal()}
            aria-label="close modal"
            role="button"
          > 
          
            <ImCross width={20} height={20} />
          </button>
        </div>
        {children}

        </div>
      </div>
    </div>
  );
}
