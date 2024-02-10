import { MdDashboard, MdOutlineFactCheck } from "react-icons/md";
import { SideNavItem } from "./siderbar-item";
import { FaHandshake, FaUserTie } from "react-icons/fa";
import { HiMiniClipboardDocumentCheck } from "react-icons/hi2";
import { VscSignOut } from "react-icons/vsc";
import { IoPieChart } from "react-icons/io5";

export const sidebarContent: SideNavItem[] = [
  {type: "text", child: "Main"},
  {type: "item", icon: <MdDashboard className="w-5 h-5" />, child: "dashboard", key: "dashboard", target: "/dashboard"},
  {type: "item", icon: <HiMiniClipboardDocumentCheck className="w-5 h-5" />, child: "Kepuasan Karyawan", key: "Kepuasan Karyawan", target: "/dashboard/kepuasanKaryawan"},
  {type: "item", icon: <MdOutlineFactCheck className="w-5 h-5" />, child: "Penilaian Kinerja", key: "Penilaian Kinerja", target: "/dashboard/penilaianKinerja"},
  {type: "text", child: "Setting"},
  {type: "item", icon: <FaUserTie className="w-5 h-5" />, child: "Data Karyawan", key: "Data Karyawan", target: "/dashboard/dataKaryawan"},
  {type: "item", icon: <IoPieChart className="w-5 h-5" />, child: "Departemen", key: "Departemen", target: "/dashboard/departemen"},
  {type: "item", icon: <FaHandshake className="w-5 h-5" />, child: "Jabatan", key: "Jabatan", target: "/dashboard/jabatan"},
];