"use client";
import React, { useEffect, useState } from "react";
import KanbanCard from "../KanbanCard/KanbanCard";

const ListTab = () => {
  const [navTab, setNavTab] = useState([]);
  const tabNav: any = [
    {
      id: 0,
      title: "বই",
      active: true,
    },
    {
      id: 1,
      title: "অধ্যায়",
      active: false,
    },
  ];
  useEffect(() => {
    setNavTab(tabNav);
  }, []);
  const handleTabClick = (tabId: number) => {
    const updatedTabs: any = navTab.map((tab: any) => ({
      ...tab,
      active: tab.id === tabId,
    }));
    setNavTab(updatedTabs);
  };
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
      <div className="h-full w-full p-3 scrollHide">
        <div className={`h-full w-full rounded-2xl ${mode === "dark"?`bg-[#202020]`:`bg-white`}  flex flex-col scrollHide`}>
          <div className="w-full ">
            <div className="flex border border-l-transparent border-r-transparent border-t-transparent border-b-gray-300 rounded-tr-2xl rounded-tl-2xl overflow-hidden scrollHide">
              {navTab.map((item: any, idx: number) => {
                return (
                  <p
                    key={idx}
                    className={`w-full p-2 text-center cursor-pointer text-[15px]  ${
                      item?.active && `bg-[#2B9E76] text-white`
                    }`}
                    onClick={() => {
                      handleTabClick(idx);
                    }}
                  >
                    {item?.title}
                  </p>
                );
              })}
            </div>
            <div className="mt-4 px-2">
              <div className={`flex items-center rounded-lg px-2 ${mode === "dark" ? `bg-[#2C2C2C]`:`bg-[#F2F4F6]`}`}>
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
                  className={`p-[7px] border-none outline-none ${mode === "dark" ? `bg-[#2C2C2C]`:`bg-[#F2F4F6]`} `}
                />
              </div>
            </div>
          </div>
          <div className="w-full h-[350px] p-3 mt-4 overflow-y-auto flex flex-col gap-2 scrollHide">
              <KanbanCard isActive />
              <KanbanCard />
              <KanbanCard />
              <KanbanCard />
              <KanbanCard />
              <KanbanCard />
           
          </div>
        </div>
      </div>
    </>
  );
};

export default ListTab;
