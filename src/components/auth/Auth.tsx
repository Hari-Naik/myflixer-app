"use client";
import React, { useState } from "react";

import AuthForm from "./AuthForm";
import { signIn } from "next-auth/react";
import { tituliam } from "../fonts";

export type UserInfoType = {
  username?: string;
  email: string;
  password: string;
};

type Props = {
  showLogin: boolean;
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const Auth: React.FC<Props> = ({ showLogin, setShowLogin }) => {
  const [account, setAccount] = useState<"signin" | "signup">("signin");
  const [userInfo, setUserInfo] = useState<UserInfoType>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");

  const handleSetAccount = () => {
    if (account === "signin") {
      setAccount("signup");
    } else {
      setAccount("signin");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (account === "signup") {
      try {
        const res = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        });
        if (res.ok) {
          const data = await res.json();
          console.log(data);
          setAccount("signin");
        } else {
          const errorData = await res.json();
          setError(errorData?.msg);
        }
      } catch (error) {
        console.log("err", error);
        setError("Something went wrong. Please try again!");
      }
    }

    if (account === "signin") {
      try {
        const res = await signIn("credentials", {
          email: userInfo.email,
          password: userInfo.password,
          redirect: false,
        });
        if (res?.ok) {
          setShowLogin(false);
        } else {
          setError(res?.error || "Invalid credentials");
        }
      } catch (error) {
        setError("Something went wrong");
      }
    }
  };

  return (
    <div
      className={`${tituliam.className} ${
        showLogin ? "flex" : "hidden"
      } fixed top-0 left-0 z-50 w-full h-full items-center justify-center bg-[#1b2e4b]/50`}>
      <div
        className={`w-[90%] max-w-[380px] h-max bg-[#223a5e] p-4 rounded-md`}>
        <div className="flex mb-4">
          <div className="w-full text-center">
            <h2 className="text-lg text-[#a0bacb]">
              {account === "signin" ? "Welcome back" : "Get Started"}
            </h2>
            <p className="text-sm text-[#f1ffff] font-semibold">
              {account === "signin"
                ? "Please enter your details to sign in"
                : "Create your account now"}
            </p>
          </div>
          <div onClick={() => setShowLogin(false)} className="text-[#00001d]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 drop-shadow-[0_1px_1px_#bbd6e3] cursor-pointer">
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        {error && (
          <div className="h-10 rounded bg-[#f8d7da] text-sm mb-2 text-[#223a5e] flex items-center px-2">
            {error}
          </div>
        )}
        <AuthForm
          account={account}
          userInfo={userInfo}
          handleSetAccount={handleSetAccount}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Auth;
