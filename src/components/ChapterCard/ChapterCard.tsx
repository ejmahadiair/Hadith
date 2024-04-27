"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ChapterCard = () => {
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
      <div className={`w-full rounded-xl ${mode === "dark" ? `bg-[#2C2C2C]`:`bg-white`} p-3 mt-3`}>
        <div className="flex items-center gap-2">
          <Image
            src="https://ihadis.com/assets/others/chapter/book.svg"
            alt="Chapter"
            unoptimized
            width={30}
            height={30}
            loading="lazy"
            loader={() => "https://ihadis.com/assets/others/chapter/book.svg"}
          />
          <p className="text-[13px]">১/১. অধ্যায়ঃ</p>
        </div>
        <p className="text-[12px] my-3">
          আল্লাহ্‌র রসূল (সাল্লাল্লাহু 'আলাইহি ওয়া সাল্লাম)- এর প্রতি কীভাবে
          ওয়াহী [১] শুরু হয়েছিল।
        </p>
        <hr className=" bg-gray-400 my-3" />
        <p className="text-[12px] my-3">
          এ মর্মে আল্লাহ তা’আলার বাণীঃ “নিশ্চয়ই আমি আপনার প্রতি সেরূপ ওয়াহী
          প্রেরণ করেছি যেরূপ নূহ ও তাঁর পরবর্তী নবীদের প্রতি ওয়াহী প্রেরণ
          করেছিলাম”। (সূরা আন-নিসা ৪/১৬৩)
        </p>
      </div>
    </>
  );
};

export default ChapterCard;
