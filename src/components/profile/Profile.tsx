"use client";

import { profileOptions } from "./data";
import ProfileItem from "./ProfileItem";

import { signOut } from "next-auth/react";

type Props = {
  setShowProfile: React.Dispatch<React.SetStateAction<boolean>>;
};

const Profile: React.FC<Props> = ({ setShowProfile }) => {
  return (
    <div className="absolute right-8 top-14 z-50 w-[90%] max-w-[170px] bg-[#223a5e] rounded p-2 border border-gray-500/10">
      {profileOptions.map(item => (
        <ProfileItem
          key={item.label}
          label={item.label}
          icon={item.icon}
          setShowProfile={setShowProfile}
        />
      ))}
      <hr className="my-2" />
      <button
        onClick={() => signOut()}
        className="w-full flex items-center gap-1 text-sm text-[#f1ffff] px-2 py-1 hover:bg-[#1b2e4b] rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5">
          <path
            fillRule="evenodd"
            d="M12 2.25a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM6.166 5.106a.75.75 0 0 1 0 1.06 8.25 8.25 0 1 0 11.668 0 .75.75 0 1 1 1.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 0 1 1.06 0Z"
            clipRule="evenodd"
          />
        </svg>
        Sign Out
      </button>
    </div>
  );
};

export default Profile;
