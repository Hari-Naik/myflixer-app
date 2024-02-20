import React from "react";
import SidebarItem from "./SidebarItem";
import { MenuItems } from "./data";

type Props = {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar: React.FC<Props> = ({ showMenu, setShowMenu }) => {
  return (
    <aside
      className={`w-full h-full absolute top-0 z-50  text-[#fcfdfd] ${
        showMenu
          ? "left-0 transition-all duration-100"
          : "left-[-100%] transition-all duration-[2000ms]"
      } flex`}>
      <div
        className={`w-[90%] max-w-[270px] h-full bg-[#223a5e] p-4 ${
          showMenu
            ? "left-0 transition-all duration-300"
            : "left-[-100%] transition-all duration-1000"
        }`}>
        <div
          onClick={() => setShowMenu(false)}
          className="h-6 w-6 bg-[#fcfdfd] flex items-center justify-center rounded-full text-[#223a5e] cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5">
            <path
              fillRule="evenodd"
              d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="pt-10 text-sm flex flex-col gap-5">
          {MenuItems.map(menu => (
            <SidebarItem
              key={menu.id}
              id={menu.id}
              icon={menu.icon}
              label={menu.label}
              setShowMenu={setShowMenu}
            />
          ))}
          {/* <SidebarItem
          label="Home"
          icon={
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                  clipRule="evenodd"
                />
              </svg>
            </>
          }
        /> */}
        </div>
      </div>

      <div
        onClick={() => setShowMenu(false)}
        className={`${
          showMenu ? "block" : "hidden"
        } flex-1 h-full bg-[#223a5e]/90 `}></div>
    </aside>
  );
};

export default Sidebar;
