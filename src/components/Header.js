import React from "react";

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
                            <li className="menu-main__item"><a href="about.html" className="menu-main__link">О нас</a></li>
                            <li className="menu-main__item"><a href="#" className="menu-main__link">Условия</a></li>
                            <li className="menu-main__item"><a href="faq.html" className="menu-main__link">Частые вопросы</a></li>
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