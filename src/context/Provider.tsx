"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Provider: React.FC<Props> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
