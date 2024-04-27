"use client"
import React, { useEffect, useState } from "react";
type proptype = {
    isActive?: boolean
}
const KanbanCard: React.FC<proptype> = (props) => {
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
      <div className={`w-full flex items-center gap-4 p-5 ${mode === "dark" && `hover:bg-[#2C2C2C]`} ${props.isActive && `${mode === "dark" ? `bg-[#2C2C2C]`:`bg-[#EBFCF6]`}`} rounded-lg cursor-pointer`}>
     
          <div className=" text-white h-[35px] w-[35px] bg-[#2B9E76] flex justify-center items-center rotate-[50deg]  rounded-lg">
            <p className=" rotate-[-50deg]">B</p>
          </div>
        
        <div>
          <p className="text-[12px] mb-1">সহিহ বুখারী</p>
          <p className="text-[10px]">সর্বমোট হাদিস - ৭৫৬৩</p>
        </div>
      </div>
    </>
  );
};

export default KanbanCard;
