"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
type proptype = {
  children: React.ReactNode;
};
const HadidLayout: React.FC<proptype> = (props) => {
  let mylocalStorage:any = "";
  if (typeof window !== "undefined") {
    mylocalStorage = localStorage.getItem("mode");
  }
  const [mode, setMode]:any = useState(mylocalStorage ? mylocalStorage :"light");
  useEffect(()=>{
    if(mylocalStorage == "light"){
      setMode("light");
    }else{
      setMode("dark");
    }
  },[mylocalStorage])
  return (
    <>
      <div className={`w-full ${mode ==="dark" ? `bg-[#202020] text-white`:` bg-white `}`}>
        <div className="p-3 flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <Image
              src="https://ihadis.com/assets/home-logo.png"
              alt="hadid logo image"
              unoptimized
              width={35}
              height={35}
              loading="lazy"
              loader={() => "https://ihadis.com/assets/home-logo.png"}
            />
            <div>
              <p className="text-[15px] font-semibold">হাদিস সমূহ</p>
              <p className="text-[10px]">হাদিস পড়ুন শিখুন এবং জানুন</p>
            </div>
          </div>
          <div className="flex items-center gap-16">
            <div className="flex items-center border border-gray-400 rounded-md px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search Hadith"
                className={`p-[8px] border-none outline-none ${mode === "dark" ? `bg-[#202020]`:`bg-white`}`}
              />
            </div>
            <button className="p-[0.68rem] rounded-md bg-[#2B9E76] text-white flex gap-2 items-center text-[12px]">
              সাপোর্ট করুন{" "}
              <Image
                src="https://ihadis.com/assets/others/helping-hand.svg"
                alt="hadid logo image"
                unoptimized
                width={15}
                height={15}
                loading="lazy"
                loader={() =>
                  "https://ihadis.com/assets/others/helping-hand.svg"
                }
              />
            </button>
          </div>
        </div>
        <div className="flex">
          <div className="h-full p-5 w-[6%]">
            <div className="h-fit my-auto flex flex-col items-center justify-center gap-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 hover:text-[#2B9E76] cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <Image
                src="https://ihadis.com/assets/leftbar/fill/active/book.svg"
                alt="hadid logo image"
                unoptimized
                width={40}
                height={40}
                loading="lazy"
                loader={() =>
                  "https://ihadis.com/assets/leftbar/fill/active/book.svg"
                }
                className="bg-[#2B9E76] p-2 rounded-md cursor-pointer"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 hover:text-[#2B9E76] cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 hover:text-[#2B9E76] cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 hover:text-[#2B9E76] cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 hover:text-[#2B9E76] cursor-pointer rotate-[-60deg]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </div>
          </div>
          <div className={` rounded-tl-2xl w-full h-[88vh] ${mode === "dark" ? `bg-[#101010]`:`bg-[#F2F4F6]`}  overflow-hidden`}>
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

export default HadidLayout;
