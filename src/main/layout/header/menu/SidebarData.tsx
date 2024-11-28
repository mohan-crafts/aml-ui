import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { PiBooksBold } from "react-icons/pi";
import { GiShoppingBag } from "react-icons/gi";
import { BiLogOutCircle } from "react-icons/bi";
import { MdOutlineDashboardCustomize } from "react-icons/md";

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