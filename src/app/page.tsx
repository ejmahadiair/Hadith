"use client"
import ListTab from "@/components/ListTab/ListTab";
import Read from "@/components/Read/Read";
import Settings from "@/components/Settings/Settings";
import HadidLayout from "@/layout/HadidLayout";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [resNav, setResNav] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 1000) {
      setResNav(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1000) {
        setResNav(true);
      } else if (window.innerWidth >= 1000) {
        setResNav(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <main>
        <HadidLayout>
          <div className=" w-full h-full grid grid-cols-8 max-lg:grid-cols-1 overflow-y-auto ">
            <div className=" col-span-2 max-lg:col-span-1 h-full scrollHide">
              {!resNav ? (
                <>
                  <ListTab />
                </>
              ) : (
                <>
                  <Disclosure>
                    <Disclosure.Button className="w-full p-3  ">
                      <div className="flex items-center gap-3 bg-white rounded-lg p-3">
                        <div>
                          <div className="w-[25px] h-[1px] bg-black"></div>
                          <div className="w-[25px] h-[1px] bg-black my-[7px]"></div>
                          <div className="w-[25px] h-[1px] bg-black"></div>
                        </div>
                        <p className="text-[15px]">সহিহ বুখারী</p>
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel>
                      <ListTab/>
                    </Disclosure.Panel>
                  </Disclosure>
                </>
              )}
            </div>
            <div className=" col-span-4 max-lg:col-span-1 max-lg:px-3">
              <Read />
            </div>
            <div className=" col-span-2 max-lg:col-span-1 max-lg:hidden">
              <Settings />
            </div>
          </div>
        </HadidLayout>
      </main>
    </>
  );
}
