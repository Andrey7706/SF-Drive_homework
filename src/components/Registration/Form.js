//import * as React from "react";
import React, { useState } from "react";

function Form({
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    values
}) {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = (e) => {
        e.preventDefault();
        setPasswordShown(passwordShown ? false : true);
    };

    const [loading, setActive] = useState(false);

    const fetchData = () => {
        setActive(true);

        setTimeout(() => {
            
        setActive(false);
        }, 1000);
    };
    
    // const [activeBtn, setActiveBtn] = useState(false);
    // if (
    //     !Object.values(formValidation.errors).length && // errors object is empty
    //     Object.values(formValidation.touched).length ===
    //       Object.values(values).length && // all fields were touched
    //     Object.values(formValidation.touched).every(t => t === true) // every touched field is true
    //   ){
    //     setActiveBtn(true);
    //   }
  return (

    <div>
        <form onSubmit={handleSubmit} autoComplete="off" className="form__container">
            <div className="form__head">
                <p className="form__head-subtitle">Шаг 1 из 3</p>
                <h1 className="form__head-title">Расскажите о себе</h1>
            </div>

            <div className="form__wrapper">
                <h2 className="form__wrapper-title">Информация о вас</h2>

                <div className="form__wrapper-form">

                    <div className="form__wrapper-form-item" >
                        <label htmlFor="userName" >
                            ФИО 
                        </label>
                        <div className="form__wrapper-input">
                            <input 
                                type="text"
                                id="userName"
                                name="userName"
                                placeholder="ФИО полностью"
                                value={values.userName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                            />
                        </div>
                        {touched.userName && errors.userName}
                    </div>

                    <div className="form__wrapper-form-item" >
                        <label htmlFor="birthdayDate" >
                            Дата рождения  
                        </label>
                        <div className="form__wrapper-input form__wrapper-input-calendar form__wrapper-input-small">
                            <input 
                                type="date"
                                id="birthdayDate"
                                name="birthdayDate"
                                value={values.birthdayDate}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        {touched.birthdayDate && errors.birthdayDate}  
                    </div>

                    <div className="form__wrapper-form-item" >
                        <label htmlFor="email" >
                            Электронная почта 
                        </label>
                        <div className="form__wrapper-input">
                            <input
                                type="email"
                                id="email"
                                placeholder="mail@example.com"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="email"
                                required
                            />
                        </div>
                        {touched.email && errors.email}
                    </div>

                    <div className="form__wrapper-form-item" >
                        <label htmlFor="phone" >
                            Телефон
                        </label>
                        <div className="form__wrapper-input form__wrapper-input-small">
                            <input 
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="+7-900-000-00-00"
                                value={values.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                            />
                        </div>
                        {touched.phone && errors.phone} 
                    </div>
                </div>
            </div>

            <div className="form__wrapper">
                    <h2 className="form__wrapper-title">Паспорт</h2>
                    <div className="form__wrapper-form">
                        <div className="form__wrapper-form-item" >
                            <label htmlFor="passport" >
                                Серия и номер 
                            </label>
                            <div className="form__wrapper-input form__wrapper-input-small">
                                <input 
                                    type="text"
                                    id="passport"
                                    name="passport"
                                    placeholder="0000 000000"
                                    value={values.passport}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                />
                            </div>
                            {touched.passport && errors.passport} 
                        </div>
                        <div className="form__wrapper-form-item" >
                            <label htmlFor="date-passport" >
                                Дата выдачи 
                            </label>
                            <div className="form__wrapper-input form__wrapper-input-calendar form__wrapper-input-small">
                                <input
                                    type="date"
                                    id="date-passport"
                                    name="datepassport"
                                    placeholder="1970-01-01"
                                    value={values.datepassport}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                />
                            </div>
                            {touched.datepassport && errors.datepassport}
                        </div>
                        <div className="form__wrapper-form-item" >
                            <label htmlFor="issued" >
                                Кем выдан 
                            </label>
                            <div className="form__wrapper-input">
                                <input  type="text"
                                    id="issued"
                                    name="issued"
                                    placeholder="Название органа выдавшего паспорт"
                                    value={values.issuedValidation}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required 
                                />
                            </div>
                            {touched.issued && errors.issued} 
                        </div>
                        <div className="form__wrapper-form-item" >
                            <label htmlFor="code">
                                Код подразделения 
                            </label>
                            <div className="form__wrapper-input form__wrapper-input-small">
                                <input  type="text"
                                    id="code"
                                    name="code"
                                    placeholder="000-000"
                                    value={values.code}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                />
                            </div>
                            {touched.code && errors.code}
                        </div>               
                    </div>
             </div>
             <div className="form__wrapper">
                <h2 className="form__wrapper-title">Водительское удостоверение</h2>
                <div className="form__wrapper-form">
                    <div className="form__wrapper-form-item" >
                        <label htmlFor="license" >
                            Серия и номер 
                        </label>
                        <div className="form__wrapper-input form__wrapper-input-small">
                            <input type="text"
                                id="license"
                                name="license"
                                placeholder="0000 000000"
                                value={values.license}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                            />
                        </div>
                        {touched.license && errors.license} 
                    </div>
                    <div className="form__wrapper-form-item" >
                        <label htmlFor="licenseDate" >
                            Серия и номер 
                        </label>
                        <div className="form__wrapper-input form__wrapper-input-calendar form__wrapper-input-small">
                            <input type="date"
                                id="licenseDate"
                                name="licenseDate"
                                value={values.licenseDate}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                            />
                        </div>
                        {touched.licenseDate && errors.licenseDate}
                    </div>
                </div>
            </div>

            <div className="form__wrapper">
                <h2 className="form__wrapper-title">Пароль</h2>
                <div className="form__wrapper-form">
                    <div className="form__wrapper-form-item" >
                        <label htmlFor="password" >
                            Придумайте пароль 
                        </label>
                        <div className="form__wrapper-input">
                            <input type={passwordShown ? "text" : "password"}
                                id="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                            />
                        </div>
                        {touched.password && errors.password} 
                    </div>
                    <div className="form__wrapper-form-item" >
                        <label htmlFor="confirm_password">
                            Повторите пароль 
                        </label>
                        <div className="form__wrapper-input">
                            <input type={passwordShown ? "text" : "password"}
                                id="confirm_password" 
                                name="confirm_password"
                                value={values.confirm_password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                            />
                        </div>
                        {touched.confirm_password && errors.confirm_password}
                    </div>
                </div>
            </div>

            <div className="form__btn-wrapper">
                {/* <button type="submit" className="form__container-btn-wrapper-btn">
                Продолжить
                </button> */}

                <button type={"submit" } className={!loading ? "form__btn-wrapper-btn" : 
                "form__btn-wrapper-btn active-btn" } onClick={fetchData}>
                {loading &&  <i className="fa fa-circle-o-notch fa-spin"></i>}
                {!loading && "Продолжить"}
                </button>
            </div>
        </form>
    </div>
  );
}

export default Form;