"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";

const TitleCard = () => {
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
      <div className={`w-full p-3 ${mode === "dark" ? `bg-[#2C2C2C]`:`bg-white`} rounded-b-lg mt-[2px]  flex items-center justify-between`}>
        <div className="flex items-center gap-4 ">
          <svg
            className="xss:w-9 xs:w-9 sm:w-9 sm:h-9"
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="39"
            viewBox="0 0 47 39"
            fill="none"
          >
            <path
              d="M44.7051 34.3757H44.2778C43.5166 33.6621 43.084 32.6705 43.084 31.6189C43.084 30.5674 43.5166 29.5758 44.2777 28.8623H44.7051C45.3176 28.8623 45.8938 28.6234 46.3275 28.1897C46.7613 27.7559 47 27.1799 47 26.5674C47 25.302 45.9705 24.2725 44.7051 24.2725H42.5956C42.8358 24.0891 43.0662 23.8898 43.2835 23.6724C44.5637 22.3921 45.2656 20.6899 45.2596 18.879C45.2481 15.3891 42.5303 12.5124 39.0775 12.1852C39.1794 11.9326 39.2332 11.6603 39.2332 11.3795C39.2332 10.1936 38.2687 9.22874 37.0832 9.22874H36.7187C36.0496 8.59231 35.6695 7.71363 35.6695 6.78208C35.6695 5.85034 36.0498 4.97147 36.7192 4.33505H37.0832C37.6563 4.33505 38.1961 4.1118 38.6046 3.70477C39.0099 3.29802 39.2332 2.75798 39.2332 2.18425C39.2332 0.998781 38.2687 0.0343628 37.0832 0.0343628H11.5022C7.74292 0.0343628 4.67543 3.05154 4.66432 6.75986C4.65836 8.57074 5.36014 10.273 6.64034 11.5532C6.85772 11.7706 7.08804 11.9699 7.32827 12.1533H4.5101C3.32409 12.1533 2.35921 13.1177 2.35921 14.3032C2.35921 14.8777 2.58283 15.4178 2.98866 15.8237C3.39523 16.2302 3.93546 16.454 4.51001 16.454H4.87362C5.543 17.0905 5.92341 17.9694 5.92341 18.9011C5.92341 19.8331 5.54291 20.7121 4.87325 21.3486H4.5101C3.32409 21.3486 2.35921 22.313 2.35921 23.4985C2.35921 24.0722 2.58246 24.6122 2.98949 25.0207C3.14169 25.1724 3.31252 25.2985 3.49685 25.397C1.40609 26.6946 0.0084779 28.9869 3.25923e-05 31.595C-0.00575061 33.5667 0.758275 35.4199 2.15148 36.8131C3.53944 38.2011 5.38447 38.9655 7.34663 38.9655H44.7051C45.3176 38.9655 45.8937 38.7267 46.3275 38.2929C46.7613 37.8592 47 37.2831 47 36.6706C47 35.4052 45.9705 34.3757 44.7051 34.3757ZM45.6231 26.5674C45.6231 26.8122 45.5274 27.0425 45.3537 27.2162C45.1802 27.3897 44.9498 27.4854 44.7051 27.4854H39.1997V25.6495H44.7051C45.2113 25.6495 45.6231 26.0613 45.6231 26.5674ZM7.61412 10.5797C6.59509 9.56077 6.0365 8.20585 6.04128 6.76427C6.05018 3.81272 8.49987 1.41141 11.5022 1.41141H37.0832C37.5095 1.41141 37.8562 1.75812 37.8562 2.18434C37.8562 2.39125 37.7756 2.58604 37.631 2.73117C37.484 2.87759 37.2895 2.95819 37.0832 2.95819H15.0768C14.6964 2.95819 14.3883 3.26644 14.3883 3.64666C14.3883 4.02688 14.6964 4.33514 15.0768 4.33514H34.9696C34.5312 5.06502 34.2924 5.90698 34.2924 6.78226C34.2924 7.65727 34.5311 8.49914 34.9693 9.22883H11.4123C10.7487 9.22883 10.1271 8.96647 9.66193 8.49005C9.19707 8.0139 8.94977 7.38601 8.96574 6.72195C8.99741 5.40586 10.1213 4.33514 11.471 4.33514H12.3228C12.7032 4.33514 13.0113 4.02688 13.0113 3.64666C13.0113 3.26644 12.7032 2.95819 12.3228 2.95819H11.471C9.38021 2.95819 7.63873 4.63164 7.58906 6.68881C7.56419 7.72685 7.95047 8.70816 8.67658 9.45189C9.40306 10.196 10.3746 10.6058 11.4123 10.6058H37.0832C37.5095 10.6058 37.8562 10.953 37.8562 11.3796C37.8562 11.5864 37.7759 11.7806 37.6301 11.9264C37.4836 12.0728 37.2894 12.1535 37.0832 12.1535H11.4123C9.97771 12.1535 8.62876 11.5945 7.61412 10.5797ZM3.96235 14.8501C3.81649 14.7042 3.73617 14.5101 3.73617 14.3033C3.73617 13.8771 4.08334 13.5303 4.5101 13.5303H11.4122H37.0832H38.4207C41.4227 13.5303 43.873 15.9317 43.8826 18.8835C43.8874 20.3248 43.3288 21.6797 42.3098 22.6986C41.4592 23.5493 40.3735 24.0781 39.1997 24.2273V22.6629C39.9731 22.5229 40.683 22.1483 41.2457 21.5719C41.9722 20.8278 42.3586 19.8461 42.3338 18.8079C42.2853 16.7507 40.5443 15.077 38.4529 15.077H4.5101C4.30329 15.0772 4.10877 14.9965 3.96235 14.8501ZM6.62327 16.4542H38.4529C39.8028 16.4542 40.9262 17.5247 40.9572 18.8408C40.9732 19.5053 40.7258 20.1337 40.2605 20.6102C39.9614 20.9165 39.5975 21.1338 39.1997 21.2502V19.8103C39.1997 19.43 38.8915 19.1218 38.5112 19.1218H24.8936C24.5133 19.1218 24.2051 19.43 24.2051 19.8103C24.2051 20.1905 24.5133 20.4987 24.8936 20.4987H29.5405V21.3488H6.62299C7.06151 20.6188 7.30045 19.7767 7.30045 18.9013C7.30045 18.026 7.0616 17.184 6.62327 16.4542ZM30.9175 20.4987H37.8228V30.2596L34.6868 28.6351C34.5875 28.5837 34.4788 28.5579 34.3702 28.5579C34.2616 28.5579 34.1528 28.5837 34.0535 28.6351L30.9176 30.2596V20.4987H30.9175ZM4.5101 22.7256H29.5405V24.2724H4.5101C4.30319 24.2724 4.1084 24.1918 3.96318 24.0471C3.81676 23.9003 3.73617 23.7055 3.73617 23.4986C3.73626 23.0724 4.08343 22.7256 4.5101 22.7256ZM45.3537 37.3193C45.1801 37.493 44.9497 37.5886 44.7051 37.5886H7.34663C5.7523 37.5886 4.25307 36.9674 3.12526 35.8396C1.99313 34.7075 1.3723 33.2015 1.37699 31.5992C1.38754 28.3185 4.10996 25.6495 7.44568 25.6495H29.5405V27.4854H7.41089C5.14993 27.4854 3.26727 29.2944 3.21402 31.5182C3.1875 32.6407 3.60526 33.7017 4.39049 34.5057C5.17572 35.3098 6.22551 35.7526 7.34654 35.7526H32.442C32.8223 35.7526 33.1304 35.4444 33.1304 35.0641C33.1304 34.6839 32.8223 34.3757 32.442 34.3757H7.34663C6.59959 34.3757 5.89954 34.0802 5.37566 33.5437C4.85168 33.0072 4.57289 32.2994 4.59061 31.551C4.62614 30.0685 5.89128 28.8623 7.41089 28.8623H29.5405V31.3915C29.5405 31.6319 29.6658 31.8548 29.8713 31.9798C30.0767 32.1047 30.3323 32.1134 30.5458 32.0028L34.3702 30.0216L38.1947 32.0028C38.2942 32.0544 38.4029 32.08 38.5113 32.08C38.6355 32.08 38.7594 32.0464 38.869 31.9798C39.0744 31.8548 39.1998 31.6319 39.1998 31.3915V28.8623H42.5056C41.9896 29.677 41.707 30.6282 41.707 31.6189C41.707 32.6097 41.9896 33.5608 42.5057 34.3757H35.1959C34.8156 34.3757 34.5074 34.6839 34.5074 35.0641C34.5074 35.4444 34.8156 35.7526 35.1959 35.7526H44.7051C45.2113 35.7526 45.6231 36.1644 45.6231 36.6706C45.6231 36.9153 45.5274 37.1456 45.3537 37.3193Z"
              fill="#2b9e76"
            ></path>
          </svg>
          <div>
            <p className="text-[15px] font-semibold mb-1">সহিহ বুখারী</p>
            <p className="text-[12px]">সর্বমোট হাদিস - ৭৫৬৩</p>
          </div>
        </div>
        <p className="text-[20px]">صحيح البخاري</p>
      </div>
    </>
  );
};

export default TitleCard;
