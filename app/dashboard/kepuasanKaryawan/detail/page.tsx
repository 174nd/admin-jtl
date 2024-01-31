"use client";

import { useHeaderSidebarContext } from "@/contexts/headerSidebar-context";
import { useEffect } from "react";
import Profile from "../../profile/page";



export default function ProfileKaryawan() {
  const { setHeaderBar, setSidebarActiveKey } = useHeaderSidebarContext();
  useEffect(() => {
    setHeaderBar({
      pageName: "Detail Form",
      breadCrumb: ["Dashboard", "Kepuasan Karyawan", "Detail Form"],
    });
    setSidebarActiveKey("Kepuasan Karyawan");
  }, [setHeaderBar, setSidebarActiveKey])
  return <Profile />;
}
