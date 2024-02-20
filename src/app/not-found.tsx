import { tituliam } from "@/components/fonts";
import Image from "next/image";
import Link from "next/link";

// https://s3.bunnycdn.ru/assets/t4/s4/images/error.png

export default function NotFound() {
  return (
    <div className="w-full h-[calc(100%-67px)] flex items-center justify-center">
      <div
        className={`${tituliam.className} w-[90%] max-w-md flex flex-col items-center justify-center bg-[#fff] rounded-md py-7`}>
        <Image
          src="https://s3.bunnycdn.ru/assets/t4/s4/images/error.png"
          width={300}
          height={300}
          alt="not-found"
        />
        <h2 className="text-xl text-[#1b2e4b] font-semibold">Whoops! 404</h2>
        <p className="text-sm">Page not found.</p>
        <Link
          href="/"
          className="flex items-center justify-center px-3 py-1 rounded-md bg-[#223a5e] text-sm text-[#fff] mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4">
            <path
              fillRule="evenodd"
              d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>

          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
