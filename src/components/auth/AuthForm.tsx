import React from "react";
import { UserInfoType } from "./Auth";

type Props = {
  account: string;
  userInfo: UserInfoType;
  handleSetAccount: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const AuthForm: React.FC<Props> = ({
  account,
  userInfo,
  handleSetAccount,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
      {account === "signup" && (
        <input
          onChange={handleChange}
          type="text"
          name="username"
          value={userInfo?.username}
          required
          className="p-2 rounded bg-[#1b2e4b] outline-none text-sm text-[#fff] font-semibold"
          placeholder="Username"
        />
      )}
      <input
        type="email"
        name="email"
        value={userInfo?.email}
        onChange={handleChange}
        required
        className="p-2 rounded bg-[#1b2e4b] outline-none text-sm text-[#fff] font-semibold"
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={userInfo?.password}
        onChange={handleChange}
        required
        className="p-2 rounded bg-[#1b2e4b] outline-none text-sm text-[#fff] font-semibold"
        placeholder="Password"
      />
      <button
        type="submit"
        className="p-2 rounded bg-[#bbd6e3] text-sm text-[#36393b]">
        {account === "signin" ? "Sign In" : "Sign Up"}
      </button>
      <div className="text-xs text-[#bbd6e3] text-center">
        <span>
          {account === "signin" ? `Don't` : "Already"} have an account?
        </span>
        <span
          onClick={handleSetAccount}
          className="ml-1 cursor-pointer hover:text-[#a0bacb]">
          {account === "signin" ? "Sign Up" : "Sign In"}
        </span>
      </div>
    </form>
  );
};

export default AuthForm;
