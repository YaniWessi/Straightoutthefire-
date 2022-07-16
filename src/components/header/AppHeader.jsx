import React from "react";

import NavMenu from "../navigation/NavMenu"
import Logo from "../logo/Logo"

const AppHeader = () => 
    <div className="flex flex-justify-between padding-32 flex-align-top">
        <Logo />
        <NavMenu />
    </div>

export default AppHeader;
