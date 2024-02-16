import {useEffect} from "react";
import throttle from "lodash.throttle"

import {Svg} from "../Svg";
import {handleMouseMove} from "utils/utils"

import "./styles.scss"

export const Ellipse = () => {
    useEffect(() => {
        const throttledHandleMouseMove = throttle(handleMouseMove, 150);
        const handleMouseMoveWithSelector = (event) => throttledHandleMouseMove(event, '.ellipse', 0.04);

        document.addEventListener('mousemove', handleMouseMoveWithSelector);

        return () => {
            document.removeEventListener('mousemove', handleMouseMoveWithSelector);
        };
    }, []);

    return (
        <div className="ellipse-wrapper">
            <div className="ellipse"></div>
            <Svg href="circle-text"/>
        </div>
    )
}