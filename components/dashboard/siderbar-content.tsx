import { MdDashboard } from "react-icons/md";
import { SideNavItem } from "./siderbar-item";
import { FaUserPlus, FaUserTie } from "react-icons/fa";
import { HiMiniClipboardDocumentCheck } from "react-icons/hi2";
import { VscSignOut } from "react-icons/vsc";

export const sidebarContent: SideNavItem[] = [
  {type: "text", child: "Main"},
  {type: "item", icon: <MdDashboard className="w-5 h-5" />, child: "dashboard", key: "dashboard", target: "/dashboard"},
  {type: "item", icon: <FaUserTie className="w-5 h-5" />, child: "Data Karyawan", key: "Data Karyawan", target: "/dashboard/dataKaryawan"},
  {type: "item", icon: <HiMiniClipboardDocumentCheck className="w-5 h-5" />, child: "Kepuasan Karyawan", key: "Kepuasan Karyawan", target: "/dashboard/kepuasanKaryawan"},
];