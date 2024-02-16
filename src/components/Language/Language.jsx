import React, { useEffect } from "react";
import { gsap } from "gsap";

import "./styles.scss";

export const Language = () => {
    useEffect(() => {
        const items = document.querySelectorAll(".languages-list__item");

        gsap.set(items, { opacity: 0, x: -40, display: 'none' });

        const wrapper = document.querySelector(".languages-wrapper");
        wrapper.addEventListener("mouseenter", handleMouseEnter);
        wrapper.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            wrapper.removeEventListener("mouseenter", handleMouseEnter);
            wrapper.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    const handleMouseEnter = () => {
        const items = document.querySelectorAll(".languages-list__item");
        gsap.to(items, { opacity: 1, x: 0, stagger: 0.2, display: 'block' });
    };

    const handleMouseLeave = () => {
        const items = document.querySelectorAll(".languages-list__item");
        gsap.to(items, { opacity: 0, x: -40, stagger: 0.1, display: "none" });
    };

    return (
        <div className="languages-wrapper horizontal-center">
            <button className="language-switcher" type="button">
                👅
            </button>
            <ul className="languages-list">
                <li className="languages-list__item">uk</li>
                <li className="languages-list__item">en</li>
            </ul>
        </div>
    );
};
