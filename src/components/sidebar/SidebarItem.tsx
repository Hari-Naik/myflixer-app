"use client";
import React from "react";

import Link from "next/link";
import { tituliam } from "../fonts";

type Props = {
  id: string;
  label: string;
  icon: React.ReactNode;
  setShowMenu: (value: React.SetStateAction<boolean>) => void;
};

const SidebarItem: React.FC<Props> = ({ id, label, icon, setShowMenu }) => {
  //   let link =
  //     label === "Home"
  //       ? "/"
  //       : label === "TV Shows"
  //       ? "/tv"
  //       : label === "Movies"
  //       ? "/movie"
  //       : "/top_imdb";

  return (
    <Link
      onClick={() => setShowMenu(false)}
      href={`${id === "home" ? "/" : `/${id}`}`}
      className={`${tituliam.className} flex gap-5`}>
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export default SidebarItem;
