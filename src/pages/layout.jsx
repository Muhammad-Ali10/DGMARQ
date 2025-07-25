import { Header, Footer } from "@/components"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div >
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
