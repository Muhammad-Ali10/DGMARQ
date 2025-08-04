import { Header, Footer } from "@/components";
import { Outlet, useLocation } from "react-router-dom";

import bg1 from "../assets/Homepagebg.jpg";
import bg2 from "../assets/Softwarepagebg.png";
import bg3 from "../assets/Randomkeyspagebg.png";
import bg4 from "../assets/Bestsellersbg.png";
import bg5 from "../assets/Steamgiftcardbg.png";


const Layout = () => {
  const { pathname } = useLocation();

  const routeBgMap = {
    "/": bg1,
    "/software": bg2,
    "/random-keys": bg3,
    "/best-sellers": bg4,
    "/steam-gift": bg5,
    // Add more routes here...
  };

  const backgroundImage = routeBgMap[pathname] || bg1;
console.log(backgroundImage)
  return (
    <div
      className="bg-cover bg-no-repeat bg-top w-full min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
