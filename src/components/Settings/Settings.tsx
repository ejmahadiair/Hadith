"use client";
import React, { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { Listbox } from '@headlessui/react'

const Settings = () => {
  const [arReng, setAraRenge]: any = useState(25);
  const [bReng, setBRenge]: any = useState(35);
  const [enabled, setEnabled] = useState(false);
  let mylocalStorage:any = "";
  if (typeof window !== "undefined") {
    mylocalStorage = localStorage.getItem("mode");
  }
  const [mode, setMode]:any = useState(mylocalStorage ? mylocalStorage :"light");
  const changeMode = ()=>{
      if(mode === "light"){
        setMode("dark");
        localStorage.setItem("mode", "dark");
      }else{
        setMode("light");
        localStorage.setItem("mode", "light");
      }
      location.reload();
  }
  useEffect(()=>{
      
      if(mylocalStorage === "light"){
        setEnabled(false)
      }else{
        setEnabled(true)
      }
 
  },[mylocalStorage]);

  // useEffect(() => {
  //   if (mylocalStorage == "light") {
  //     console.log("my local:", mylocalStorage);
  //     setMode("light");
  //   } else {
  //     setMode("dark");
  //   }
  // }, [mylocalStorage]);

  return (
    <>
      <div className="h-full w-full p-3 overflow-y-auto scrollHide">
        <div className={`h-[84vh] w-full rounded-xl ${mylocalStorage === "dark" ? `bg-[#2C2C2C]`:`bg-white`} px-3 py-5 overflow-y-auto scrollHide`}>
          <h2 className="text-[15px] text-center font-[500]">সেটিংস</h2>
          <p className="text-[12px] mt-4 ">আরবি ফন্ট সিলেক্ট করুন</p>
          <select className={`p-3 w-full cursor-pointer mt-4 outline-none border border-gray-300 ${mode === "dark" ? `bg-[#2C2C2C]`:`bg-white`} rounded-md`}>
            <option value="" className="">
              KFGQ
            </option>
            <option value="">My Quran</option>
            <option value="">Al Mushaf</option>
            <option value="">Amiri</option>
            <option value="">Arial</option>
          </select>
          
          <div className="mt-6">
            <p className="text-[12px] mb-2">এরাবিক ফন্ট সাইজ</p>
            <div className="flex gap-2 items-center">
              <input
                type="range"
                value={arReng}
                onChange={(e) => setAraRenge(e.target.value)}
                className="!bg-[#2B9E76] text-[#2B9E76] w-full"
              />
              <p className="text-[10px] font-semibold">{arReng}</p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-[12px] mb-2">অনুবাদ ফন্ট সাইজ</p>
            <div className="flex gap-2 items-center">
              <input
                type="range"
                value={bReng}
                onChange={(e) => setBRenge(e.target.value)}
                className="!bg-[#2B9E76] text-[#2B9E76] w-full"
              />
              <p className="text-[10px] font-semibold">{bReng}</p>
            </div>
          </div>
          <div className="mt-4 w-full flex items-center justify-between">
            <p className="text-[12px] mb-2">নাইট মোড</p>
            <Switch
            onClick={changeMode}
              checked={enabled}
              onChange={setEnabled}
              className={`${
                enabled ? "bg-[#2B9E76]" : "bg-gray-200"
              } relative inline-flex h-5 w-11 items-center rounded-full`}
            >
              <span className="sr-only">Enable notifications</span>
              <span
                className={`${
                  enabled ? "translate-x-6" : "translate-x-1"
                } inline-block h-3 w-3 transform rounded-full bg-white transition`}
              />
            </Switch>
          </div>
          <div className="mt-6 bg-[#34AB82] p-3 text-white w-full rounded-lg">
            <h2 className="text-[15px] font-bold">আপনিও সদাকায়ে জারিয়াতে অংশ নিন</h2>
            <p className="text-[11px] text-gray-100 mt-4">
              আপনার দান, সেটা ছোট হলেও, ইসলামের বার্তা ও হাদিস প্রচারে সহায়তা
              করবে। আমাদের কাজের অংশ হতে এবং এই গুরুত্বপূর্ণ কাজে সাহায্য করতে
              আমাদের প্রজেক্টে হাদিয়া দিন। ইনশাআল্লাহ এটি সদাকায়ে জারিয়াহ হিসেবে
              আল্লাহ্‌র কাছে কবুল হবে।
            </p>
            <div className="w-fit h-fit mx-auto mt-3">

             <button className="text-[12px] p-2 border mx-auto w-fit text-center text-black bg-white rounded-md">সাপোর্ট করুন</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
