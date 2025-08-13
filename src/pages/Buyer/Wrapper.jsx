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

      <div className="flex w-full bg-[url(https://res.cloudinary.com/dptwervy7/image/upload/v1754395487/Homepagebg_idyipm.jpg)] bg-cover">
        <Sidebar side={side} closeSidebar={closeSidebar} />

        <section
          className={`ml-0 w-full ${
            side === "left-64 md:left-0" ? " md:ml-64 md:pl-12 pl-3" : "ml-20"
          }   min-h-screen pt-24 px-4`}
        >
          <div className="text-white md:px-4 px-0 py-6">{children}</div>
        </section>
      </div>
    </>
  );
};

export default Wrapper;