import React from "react";

function Collapsible() {
    return (
        <main>
            <section className="question">
                <div className="wrap">
                    <div className="question-content">
                        <img className="question-img" src="./img/img-faq.svg" alt="" />
                        <h1 className="h1">
                            Частые вопросы
                        </h1>
                        <div className="content-text">
                            Отвечаем на вопросы, которые у вас могут возникнуть.
                        </div>
                    </div>
                </div>
            </section>

            <section className="collapsible">
                <div className="wrap">
                    <div className="collapsible-set">
                        <button className="collapsible-button">
                            Могу ли я отменить бронь?
                        </button>
                        <div className="collapsible-content">
                            <div className="collapsible-inner">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                        </div>
                        <button className="collapsible-button">
                            Могу ли я вернуть деньги, если не подошёл автомобиль?
                        </button>
                        <div className="collapsible-content">
                            <div className="collapsible-inner">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                        </div>
                        <button className="collapsible-button">
                            Что делать, если случилось ДТП?
                        </button>
                        <div className="collapsible-content">
                            <div className="collapsible-inner">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                        </div>
                        <button className="collapsible-button">
                            Могу ли я оставить автомобиль в удобном для меня месте?
                        </button>
                        <div className="collapsible-content">
                            <div className="collapsible-inner">
                                Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили.
                            </div>
                        </div>
                        <button className="collapsible-button">
                            Что делать, если собственник просит заплатить ему напрямую?
                        </button>
                        <div className="collapsible-content">
                            <div className="collapsible-inner">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                        </div>
                        <button className="collapsible-button">
                            Должен ли я заправлять автомобиль?
                        </button>
                        <div className="collapsible-content">
                            <div className="collapsible-inner">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Collapsible;