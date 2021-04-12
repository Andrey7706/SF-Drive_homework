import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <ul className="menu-main">
            <li className="menu-main__item"><Link to="about" className="menu-main__link">О нас</Link></li>
            <li className="menu-main__item"><Link to="#" className="menu-main__link">Условия</Link></li>
            <li className="menu-main__item"><Link to="faq" className="menu-main__link">Частые вопросы</Link></li>
        </ul>
    )
}

export default Nav;