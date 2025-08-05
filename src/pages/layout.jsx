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
    "/": "https://res.cloudinary.com/dptwervy7/image/upload/v1754395487/Homepagebg_idyipm.jpg",
    "/software": "https://res.cloudinary.com/dptwervy7/image/upload/v1754395511/Softwarepagebg_gm6szw.png",
    "/random-keys": "https://res.cloudinary.com/dptwervy7/image/upload/v1754395487/Randomkeyspagebg_wu2pkc.png",
    "/best-sellers": "https://res.cloudinary.com/dptwervy7/image/upload/v1754395485/Bestsellersbg_hittvu.png",
    "/steam-gift": "https://res.cloudinary.com/dptwervy7/image/upload/v1754395488/Steamgiftcardbg_qtpqnd.png",
    // Add more routes here...
  };

  const backgroundImage = routeBgMap[pathname] || "https://res.cloudinary.com/dptwervy7/image/upload/v1754395487/Homepagebg_idyipm.jpg";
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
