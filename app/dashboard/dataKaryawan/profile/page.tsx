"use client";

import { useHeaderSidebarContext } from "@/contexts/headerSidebar-context";
import { useEffect } from "react";
import Profile from "../../profile/page";



export default function ProfileKaryawan() {
  const { setHeaderBar, setSidebarActiveKey } = useHeaderSidebarContext();
  useEffect(() => {
    setHeaderBar({
      pageName: "Profile",
      breadCrumb: ["Dashboard", "Data Karyawan", "Profile"],
    });
    setSidebarActiveKey("Data Karyawan");
  }, [setHeaderBar, setSidebarActiveKey])
  return <Profile />;
}
