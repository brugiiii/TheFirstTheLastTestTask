import React, { useState } from "react";
import "./styles.scss";
import { Menu } from "components/Menu";

export const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                className={"hamburger hamburger--emphatic horizontal-center" + (isOpen ? " is-active" : "")}
                onClick={() => setIsOpen(!isOpen)}
                type="button"
            >
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
            </button>

            <Menu setIsOpen={setIsOpen} isOpen={isOpen} />
        </>
    );
};
