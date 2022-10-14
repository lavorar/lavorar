import React from "react"
import AppHeader from "./header/AppHeader"
import Footer from "./footer/Footer"
import SideBar from "./sidebar/SideBar";
import NavMobile from "./footer/NavMobile";

const Layout = (props) => {
    return (
        <>
            
            <SideBar />
            {/* <Footer /> */}
            <NavMobile />
        </>
    )
}

export default Layout;