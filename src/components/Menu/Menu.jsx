import {Navbar} from "components/Navbar";
import {useEffect} from "react";

import {Logo} from "components/Logo"

import "./styles.scss";

export const Menu = ({setIsOpen, isOpen}) => {
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            setIsOpen(!isOpen);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && isOpen) {
                setIsOpen(false);
            }
        };

        const menuLinks = document.querySelectorAll('.menu a')

        menuLinks.forEach((link) => link.addEventListener("click", () => setIsOpen(false)))

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isOpen, setIsOpen]);


    return (
        <div className={"backdrop " + (!isOpen ? "is-hidden" : "")} onClick={handleBackdropClick}>
            <div className="menu">
                <Logo/>
                <Navbar/>
            </div>
        </div>
    );
};
