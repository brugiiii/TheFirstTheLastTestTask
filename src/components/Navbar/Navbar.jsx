import {Link} from "react-router-dom";

import "./styles.scss"

export const Navbar = () => {
    return (
        <nav className="main-nav">
            <ul className="nav-list">
                <li className="nav-list__item">
                    <Link className="nav-list__link" to="/about">
                        what?
                    </Link>
                </li>
                <li className="nav-list__item">
                    <Link className="nav-list__link" to="/about">
                        who?
                    </Link>
                </li>
                <li className="nav-list__item">
                    <Link className="nav-list__link" to="/about">
                        where?
                    </Link>
                </li>
            </ul>
        </nav>
    )
}