"use client";

import React, { useEffect } from 'react';
import { useHeaderSidebarContext } from "@/contexts/headerSidebar-context";


export default function Dash() {
  const { setHeaderBar, setSidebarActiveKey } = useHeaderSidebarContext();
  useEffect(() => {
    setHeaderBar({pageName: "Dashboard", breadCrumb: ["Dashboard"]});
    setSidebarActiveKey("dashboard");
  }, [])
  return (
    <>
    </>
  );
}
