import React, { useEffect, useState } from 'react'

const NameCard = () => {
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
       <div className={`w-full h-fit rounded-t-xl ${mode === "dark" ? `bg-[#2C2C2C]`:`bg-[#FAFBFB]`}`}>
            <div className='p-3 text-[15px]'>
                Bukhari 1
            </div>
       </div>
    </>
  )
}

export default NameCard