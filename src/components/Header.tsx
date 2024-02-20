"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Search from "./Search";
import Sidebar from "./sidebar/Sidebar";
import Auth from "./auth/Auth";
import { useSession } from "next-auth/react";
import Profile from "./profile/Profile";
import { tituliam } from "./fonts";

const Header = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const { data: session } = useSession();

  return (
    <>
      <header
        className={`${tituliam.className} sticky z-10 top-0 w-full bg-[#223a5e] p-4`}>
        <div className="w-full flex items-center mb-2 md:mb-0">
          <div className="flex items-center gap-3">
            <div
              onClick={() => setShowMenu(true)}
              className="text-white cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
            <Link href="/">
              <Image
                src="/myflixer-logo.png"
                width={126}
                height={28}
                alt="logo"
              />
            </Link>
          </div>
          <div className="hidden md:block ml-3 mr-3 flex-1">
            <Search />
          </div>
          <div className="flex items-center gap-4 text-white cursor-pointer ml-auto">
            <svg
              onClick={() => setShowSearch(!showSearch)}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6 block md:hidden">
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                clipRule="evenodd"
              />
            </svg>
            {!session && (
              <svg
                onClick={() => setShowLogin(true)}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            {session && (
              <div
                onClick={() => setShowProfile(!showProfile)}
                className="h-8 w-8 rounded-full bg-[#17a2b8] text-xl font-semibold text-[#fdfdfd] flex items-center justify-center">
                {session?.user?.email?.charAt(0)}
              </div>
            )}
          </div>
        </div>
        {showSearch && <Search />}
      </header>
      <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />
      <Auth showLogin={showLogin} setShowLogin={setShowLogin} />
      {showProfile && <Profile setShowProfile={setShowProfile} />}
    </>
  );
};

export default Header;
