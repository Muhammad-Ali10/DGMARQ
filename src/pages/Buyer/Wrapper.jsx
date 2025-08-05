import { useState } from "react";
import {Sidebar, AdminNav} from "@/components";


const Wrapper = ({ children }) => {
  const [side, setSide] = useState("-left-64 md:left-0");

  const openSidebar = () => {
    setSide("left-64 md:left-0");
  };
  const closeSidebar = () => {
    setSide("-left-64 md:left-0");
  };

  return (
    <>
      <AdminNav
        openSidebar={openSidebar}
        closeSidebar={closeSidebar}
        side={side}
      />

      <div className="flex w-full">
        <Sidebar side={side} closeSidebar={closeSidebar} />

        <section
          className={`ml-0 w-full ${
            side === "left-64 md:left-0" ? " md:ml-64 md:pl-12 pl-3" : "ml-20"
          } bg-gray-100 min-h-screen pt-24 px-4`}
        >
          <div className="text-black md:px-4 px-0 py-6">{children}</div>
        </section>
      </div>
    </>
  );
};

export default Wrapper;