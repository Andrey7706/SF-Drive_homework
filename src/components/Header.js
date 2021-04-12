import React from "react";
import Nav from './Nav';

function Header() {
    return (
        <header className="header">
            <div className="wrap">
                <div className="header-content">
                    <div className="header-logo">
                        <a href="/"><img src="./img/logo.svg" alt="Логотип" /></a>
                    </div>
                    <nav className="menu">
                        <Nav />
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

