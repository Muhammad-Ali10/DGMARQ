import { Header, Footer } from "@/components"
import { Outlet, useLocation } from "react-router-dom"




const Layout = () => {
    const { pathname } = useLocation();

    // Map routes to background images
    const routeBgMap = {
        "/": "bg-[url('./images/Homepagebg.jpg')]",
        "/software": "bg-[url('./images/Softwarepagebg.png')]",
        "/random-keys": "bg-[url('./images/Randomkeyspagebg.png')]",
        "/best-sellers": "bg-[url('./images/Bestsellersbg.png')]",
        "/steam-gift": "bg-[url('./images/Steamgiftcardbg.png')]",
        // "/about-company": "/images/AboutCompanyBg.jpg",
        // "/marketplace": "/images/MarketplaceBg.jpg",
        // "/security": "/images/SecurityBg.jpg",
        // "/contactus": "/images/ContactBg.jpg",
        // "/careers": "/images/CareersBg.jpg"
    };

    const backgroundImage = routeBgMap[pathname] || "bg-[url('./images/Homepagebg.jpg')]";
    return (
        <div className={`${backgroundImage} bg-cover  bg-no-repeat bg-top w-full `}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
