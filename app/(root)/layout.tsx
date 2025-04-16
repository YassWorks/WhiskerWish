import React from "react";
import Navbar from "../components/Navbar";

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}

export default Layout;
