import { BiLogOutCircle } from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import * as IoIcons from "react-icons/io";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { PiBooksBold } from "react-icons/pi";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/main",
    icon: <MdOutlineDashboardCustomize />,
    cName: "nav-text",
  },
  {
    title: "Users",
    path: "/main/users",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Books",
    path: "/main/books",
    icon: <PiBooksBold />,
    cName: "nav-text",
  },
  {
    title: "Authors",
    path: "/authors",
    icon: <FaIcons.FaUserCog />,
    cName: "nav-text",
  },

  {
    title: "Orders",
    path: "/orders",
    icon: <GiShoppingBag />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/",
    icon: <BiLogOutCircle />,
    cName: "nav-text",
  },
];