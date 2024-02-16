import React from "react";
import {Link} from "react-router-dom";

import {ReactComponent as LogoIcon} from "images/logo.svg";

import "./styles.scss"

export const Logo = () => {
    return (
        <Link className="logo-link" to="/">
            <LogoIcon className="icon-logo"/>
        </Link>
    )
}