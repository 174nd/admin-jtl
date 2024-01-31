"use client";

import React, { createContext, useContext, useEffect, useState } from 'react'


type HeaderSidebarContextProviderProps = {
  children: React.ReactNode;
};

type BreadCrumbType = string | React.ReactNode;
type HeaderBar = {
  pageName: string;
  breadCrumb: BreadCrumbType[];
}

type HeaderSidebarContextType = {
  sidebarStatus: boolean,
  toggleSidebar: () => void,

  headerBar: HeaderBar,
  setHeaderBar: React.Dispatch<React.SetStateAction<HeaderBar>>,

  sidebarActiveKey: string,
  setSidebarActiveKey: React.Dispatch<React.SetStateAction<string>>,

  stickyHeader: boolean,
  setStickyHeader: React.Dispatch<React.SetStateAction<boolean>>,
}

const HeaderSidebarContext = createContext<HeaderSidebarContextType | null>(null);

export default function HeaderSidebarContextProvider({children}: HeaderSidebarContextProviderProps) {
  const [sidebarStatus, setHeaderSidebar] = useState<boolean>(false);
  const [stickyHeader, setStickyHeader] = useState<boolean>(false);
  const [sidebarActiveKey, setSidebarActiveKey] = useState<string>("");
  const [headerBar, setHeaderBar] = useState<HeaderBar>({pageName: "-", breadCrumb: ["-"]});

  const toggleSidebar = () => {
    window.localStorage.setItem("toggleSidebar", !sidebarStatus ? "true" : "false");
    setHeaderSidebar(!sidebarStatus);
  }

  useEffect(() => {
    const localSidebar = window.localStorage.getItem("sidebarStatus") as "true" | "false" | null;
    setHeaderSidebar(localSidebar == "true");
    setStickyHeader(window.scrollY > 0);
    
    const handleScroll = () => setStickyHeader(window.scrollY > 0);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <HeaderSidebarContext.Provider value={{ 
    sidebarStatus,
    toggleSidebar,
    headerBar,
    setHeaderBar,
    sidebarActiveKey,
    setSidebarActiveKey,
    stickyHeader,
    setStickyHeader,
  }}>{children}</HeaderSidebarContext.Provider>
}

export function useHeaderSidebarContext() {
  const context = useContext(HeaderSidebarContext);

  if (context === null) throw new Error(
    "useActiveSectionContext must be used within an ActiveSectionContextProvider"
  );

  return context;
}
