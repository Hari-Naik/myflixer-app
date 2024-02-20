"use client";

import { tituliam } from "@/components/fonts";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

// import { getServerSession } from "next-auth";

type UserType = {
  id: string;
  username: string;
  email: string;
};

export default function Profile() {
  const { data: session } = useSession();
  const [user, setUser] = useState<UserType>();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  useEffect(() => {
    fetch(`/api/user/${session?.user?.id}`)
      .then(res => res.json())
      .then(res => setUser(res));
  }, [session?.user?.id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (showPassword === false) {
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("The password confirmation does not match.");
      return;
    }

    try {
      const res = await fetch(`/api/user/${user?.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newPassword }),
      });
      if (res.ok) {
        setSuccess("Your changes have been saved.");
      } else {
        setError("Something went wrong. Please try again!");
      }
    } catch (error) {
      setError("Something went wrong. Please try again!");
    }
  };

  return (
    <div className="h-[89%] w-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className={`${tituliam.className} flex flex-col gap-2 p-4 rounded bg-[#223a5e] w-[90%] max-w-xl`}>
        {error && (
          <div className="flex items-center justify-between h-10 rounded bg-[#f8d7da] text-sm mb-2 text-[#223a5e] px-2">
            {error}
            <svg
              onClick={() => setError("")}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 cursor-pointer">
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg>
          </div>
        )}

        {success && (
          <div className="flex items-center justify-between h-10 rounded bg-[#d4edda] text-sm mb-2 text-[#223a5e] px-2">
            {success}
            <svg
              onClick={() => setSuccess("")}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 cursor-pointer">
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg>
          </div>
        )}
        <input
          type="text"
          name="username"
          value={user?.username}
          placeholder="Username"
          className="p-2 rounded bg-[#1b2e4b] outline-none text-sm text-[#fff] font-semibold"
        />
        <input
          type="email"
          name="email"
          value={user?.email}
          placeholder="Email"
          className="p-2 rounded bg-[#1b2e4b] outline-none text-sm text-[#fff] font-semibold"
        />
        <button
          onClick={() => setShowPassword(!showPassword)}
          type="button"
          className={`flex items-center justify-center p-1 rounded hover:bg-[#0a1627] ${
            showPassword ? "bg-[#0a1627]" : "bg-[#1b2e4b]"
          } outline-none text-sm text-[#fff] font-semibold`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4">
            <path
              fillRule="evenodd"
              d="M8 7a5 5 0 1 1 3.61 4.804l-1.903 1.903A1 1 0 0 1 9 14H8v1a1 1 0 0 1-1 1H6v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 .293-.707L8.196 8.39A5.002 5.002 0 0 1 8 7Zm5-3a.75.75 0 0 0 0 1.5A1.5 1.5 0 0 1 14.5 7 .75.75 0 0 0 16 7a3 3 0 0 0-3-3Z"
              clipRule="evenodd"
            />
          </svg>
          Change Password
        </button>

        {showPassword && (
          <>
            <input
              type="password"
              name="new password"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              placeholder="New password"
              className="p-2 rounded bg-[#1b2e4b] outline-none text-sm text-[#fff] font-semibold"
            />
            <input
              type="password"
              name="confirm new password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              placeholder="Repeat your new password"
              className="p-2 rounded bg-[#1b2e4b] outline-none text-sm text-[#fff] font-semibold"
            />
          </>
        )}

        <button type="submit" className="bg-[#bbd6e3] p-2 rounded text-sm">
          Save Changes
        </button>
      </form>
    </div>
  );
}
