import React from "react";
import { NavLink } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Main() {
    return ( 
        <>
        <Header />
        <main>
            <section className="top">
                <div className="container">
                    <h1 className="h1">Каршеринг в любой точке России</h1>
                    <div className="top-description">
                        Будьте всегда за рулём во время путешествий и командировок.
                    </div>
                    <NavLink to="/Registration">
                        <button className="btn btn-green">Зарегистрироваться</button>
                    </NavLink>
                </div>
            </section>

            <section className="futures">
                <div className="container">
                    <div className="futures-item">
                        <div className="futures-img">
                            <img src="./img/futures-1.svg" alt="" />
                        </div>
                        <div className="futures-content">
                            <h2 className="h2 futures-title">
                                Аренда напрямую от владельцев
                            </h2>
                            <div className="futures-text">
                                Вы получите автомобиль от его собственника, а мы проверим юридическую чистоту и техническую исправность.
                            </div>
                        </div>
                    </div>
                    <div className="futures-item">
                        <div className="futures-img">
                            <img src="./img/futures-2.svg" alt="" />
                        </div>
                        <div className="futures-content">
                            <h2 className="h2 futures-title">
                                Автомобили<br /> на любой вкус
                            </h2>
                            <div className="futures-text">
                                Вы всегда можете подобрать автомобиль любого класса от бюджетных моделей до премиум-класса и спорткаров
                            </div>
                        </div>
                    </div>
                    <div className="futures-item">
                        <div className="futures-img">
                            <img src="./img/futures-3.svg" alt="" />
                        </div>
                        <div className="futures-content">
                            <h2 className="h2 futures-title">
                                Гарантия<br /> честной аренды
                            </h2>
                            <div className="futures-text">
                                Общение и оплата происходит через наш сервис, что предотвращает вас от обмана.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="steps">
                <div className="container">
                    <h2 className="h2 steps-title">Как арендовать автомобиль</h2>
                    <div className="steps-list">
                        <div className="steps-item">
                            <div className="steps-step">1</div>
                            <div className="steps-text">
                                Выберите автомобиль
                            </div>
                        </div>
                        <div className="steps-item">
                            <div className="steps-step">2</div>
                            <div className="steps-text">
                                Забронируйте дату и время
                            </div>
                        </div>
                        <div className="steps-item">
                        <div className="steps-step">3</div>
                            <div className="steps-text">
                                Получите автомобиль
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="rent">
                <div className="container">
                    <h2 className="h2 rent-title">У вас есть автомобиль?</h2>
                    <div className="rent-description">
                        Чтобы он не простаивал — сдавайте его в аренду и зарабатывайте.
                    </div>
                    <div className="rent-list">
                        <div className="rent-item">
                            <div className="rent-icon">
                                <img src="./img/rent-icon-1.svg" alt="" />
                            </div>
                            <div className="rent-text">
                                Вы сами указываете цену
                            </div>
                        </div>
                        <div className="rent-item">
                            <div className="rent-icon">
                                <img src="./img/rent-icon-2.svg" alt="" />
                            </div>
                            <div className="rent-text">
                                Мы страхуем автомобили
                            </div>
                        </div>
                        <div className="rent-item">
                            <div className="rent-icon">
                                <img src="./img/rent-icon-3.svg" alt="" />
                            </div>
                            <div className="rent-text">
                                Наша комиссия всего 3%
                            </div>
                        </div>
                        <div className="rent-item">
                            <div className="rent-icon">
                                <img src="./img/rent-icon-4.svg" alt="" />
                            </div>
                            <div className="rent-text">
                                Выплаты каждую неделю
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonial">
                <div className="container">
                    <h2 className="h2 testimonial-title">
                        Отзывы клиентов
                    </h2>
                </div>
            </section>

            <section className="registration">
                <div className="container">
                    <div className="registration-content">
                        <img className="registration-img" src="./img/register.svg" alt="" />
                        <h2 className="h2 registration-title">Попробуйте аренду на себе</h2>
                        <NavLink to="/Registration">
                            <button className="btn btn-green">Зарегистрироваться</button>
                        </NavLink>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
        </>
    );
}

export default Main;