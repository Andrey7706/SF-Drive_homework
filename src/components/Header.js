import React from "react";
import { Link, Redirect } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="wrap">
                <div className="header-content">
                    <div className="header-logo">
                        <a href="/"><img src="./img/logo.svg" alt="Логотип" /></a>
                    </div>
                    <nav className="menu">
                        <ul className="menu-main">
                            <li className="menu-main__item"><Link to="about" className="menu-main__link">О нас</Link></li>
                            <li className="menu-main__item"><Link to="#" className="menu-main__link">Условия</Link></li>
                            <li className="menu-main__item"><Link to="faq" className="menu-main__link">Частые вопросы</Link></li>
                        </ul>
                        <button className="btn">Войти</button>
                    </nav>
                    <div className="menu-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

