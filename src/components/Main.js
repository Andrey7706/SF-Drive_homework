import React from "react";

function Main() {
    return (
        <main>
            <section className="intro">
                <div className="wrap">
                    <div className="intro-content">
                        <img className="intro-img" src="./img/img-intro.svg" alt="" />
                        <h1 className="h1">
                            О нас
                        </h1>
                        <div className="content-text">
                            Это учебный проект, созданный с целью получения боевого опыта в разработке настоящего живого веб-приложения. 
                            Этот сервис имитирует работу каршеринга, в котором можно не только арендовать автомобили, но и сдавать их в аренду.
                        </div>
                    </div>
                </div>
            </section>

            <section className="contacts">
                <div className="wrap">
                    <div className="contacts-content">
                        <h2 className="h2">
                            Контакты
                        </h2>
                        <div className="contacts-flex">
                            <div className="contacts-item">
                                <div className="contacts-descr">
                                    Электронная почта
                                </div>
                                <a className="contacts-link" href="mailto:drive@skillfactory.com">drive@skillfactory.com</a>
                            </div>
                            <div className="contacts-item">
                                <div className="contacts-descr">
                                    Телефон
                                </div>
                                <a className="contacts-link" href="tel:+79121234567">+7 912 123-45-67</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team">
                <div className="wrap">
                    <div className="team-content">
                        <h2 className="h2">
                            Команда
                        </h2>
                        <div className="team-flex">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="./img/img-1.png" alt="" />
                                </div>
                                <div className="team-name">
                                    Иван Иванов
                                </div>
                                <div className="team-skill">
                                    СЕО
                                </div>
                            </div>
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="./img/img-2.png" alt="" />
                                </div>
                                <div className="team-name">
                                    Алексей Смирнов
                                </div>
                                <div className="team-skill">
                                    Frontend-разработчик
                                </div>
                            </div>
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="./img/img-3.png" alt="" />
                                </div>
                                <div className="team-name">
                                    Денис Ярцев
                                </div>
                                <div className="team-skill">
                                    Backend-разработчик
                                </div>
                            </div>
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="./img/img-4.png" alt="" />
                                </div>
                                <div className="team-name">
                                    Николай Морозов
                                </div>
                                <div className="team-skill">
                                    Дизайнер
                                </div>
                            </div>
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="./img/img-5.png" alt="" />
                                </div>
                                <div className="team-name">
                                    Ирина Деева
                                </div>
                                <div className="team-skill">
                                    Копирайтер
                                </div>
                            </div>
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="./img/img-6.png" alt="" />
                                </div>
                                <div className="team-name">
                                    Мария Стрелкова
                                </div>
                                <div className="team-skill">
                                    SMM
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Main;