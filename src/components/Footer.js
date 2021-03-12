import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-copy">
                    &copy; SkillDrive Inc. 2020
                </div>
                <div className="footer-social">
                    <a href="#">
                        <svg className="icon">
                            <use xlinkHref="./img/sprite.svg#vk"></use>
                        </svg>
                    </a>
                    <a href="#">
                        <svg className="icon">
                            <use xlinkHref="./img/sprite.svg#inst"></use>
                        </svg>
                    </a>
                    <a href="#">
                        <svg className="icon">
                            <use xlinkHref="./img/sprite.svg#fb"></use>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;