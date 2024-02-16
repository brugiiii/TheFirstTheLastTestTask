import sprite from "../images/sprite.svg";

export const Svg = ({ href }) => (
    <svg className={"icon-" + href}>
        <use href={sprite + "#icon-" + href}></use>
    </svg>
);
