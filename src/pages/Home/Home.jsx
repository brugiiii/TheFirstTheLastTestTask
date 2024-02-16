import { useEffect } from "react";
import throttle from "lodash.throttle";

import { Marquee } from "components/Marquee";
import { Ellipse } from "components/Elliplse";
import transition from "components/transition";

import { handleMouseMove } from "utils/utils";

import "./styles.scss";

const Home = ({ title }) => {
    useEffect(() => {
        const throttledHandleMouseMove = throttle(handleMouseMove, 150);
        const handleMouseMoveWithSelector = (event) =>
            throttledHandleMouseMove(event, ".hero-title");

        document.addEventListener("mousemove", handleMouseMoveWithSelector);

        return () => {
            document.removeEventListener("mousemove", handleMouseMoveWithSelector);
        };
    }, []);

    return (
        <section className="hero">
            <div className="container">
                <h1 className="hero-title">{title}</h1>
            </div>
            <Marquee />
            <Ellipse />
        </section>
    );
};

export default transition(Home);
