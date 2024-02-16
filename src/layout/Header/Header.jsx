import React from "react";

import {Navbar} from "components/Navbar";
import {Language} from "components/Language";
import {Hamburger} from "components/Hamburger"
import {Logo} from "components/Logo"

import "./styles.scss";

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <Language/>
                    <Logo/>
                    <Navbar/>
                    <Hamburger/>
                </div>
            </div>
        </header>
    );
};
