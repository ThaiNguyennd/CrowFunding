import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import IconDashboard from "../../components/icons/IconDashboard";
import IconCampaign from "../../components/icons/IconCampaign";
import IconPayment from "../../components/icons/IconPayment";
import IconWithdraw from "../../components/icons/IconWithdraw";
import IconProfile from "../../components/icons/IconProfile";
import IconLogout from "../../components/icons/IconLogout";
import IconDarkmode from "../../components/icons/IconDarkmode";
import useDarkMode from "../../hooks/useDarkMode";

const DashboardSidebar = () => {
  const [showIconDark, setShowIconDark] = useState();
  const [darkMode, setDarkMode] = useDarkMode();
  const handleDarkmode = () => {
    setDarkMode(!darkMode);
    setShowIconDark(!showIconDark);
  };
  const sidebarLinks = [
    {
      icon: <IconDashboard></IconDashboard>,
      title: "Dashboard",
      url: "/",
    },
    {
      icon: <IconCampaign></IconCampaign>,
      title: "Campaign",
      url: "/campaign",
    },
    {
      icon: <IconPayment></IconPayment>,
      title: "Payment",
      url: "/payment",
    },
    {
      icon: <IconWithdraw></IconWithdraw>,
      title: "Withdraw",
      url: "/withdraw",
    },
    {
      icon: <IconProfile></IconProfile>,
      title: "Profile",
      url: "/profile",
    },
    {
      icon: <IconLogout></IconLogout>,
      title: "Logout",
      url: "/logout",
    },
    {
      icon: <IconDarkmode dark={showIconDark}></IconDarkmode>,
      title: "Light/Dark",
      url: "/#",
      onClick: () => handleDarkmode(),
    },
  ];

  const navlinkClass =
    "flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8  last:mt-auto last:bg-white dark:last:bg-darksecondary last:shadow-sdprimary ";
  return (
    <div className=" md:w-[76px]  rounded-3xl bg-white shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] px-[14px] py-10 flex flex-col flex-shrink-0 dark:bg-dark dark:text-lite  ">
      {sidebarLinks.map((link) => {
        if (link.onClick) {
          return (
            <div
              key={link.title}
              onClick={link?.onClick}
              className={`${navlinkClass} cursor-pointer`}
            >
              <span>{link.icon}</span>
              <span className="md:hidden">{link.title}</span>
            </div>
          );
        }
        return (
          <NavLink
            to={link.url}
            key={link.title}
            className={({ isActive }) =>
              isActive
                ? `${navlinkClass} text-primary bg-primary bg-opacity-20`
                : `${navlinkClass} text-icon-color`
            }
          >
            <span>{link.icon}</span>
            <span className="md:hidden">{link.title}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default DashboardSidebar;
