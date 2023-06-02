import React from 'react';
import s from './notfound.module.css';

export const NotFound = () => {
    return (
        <div className={s.container}>
            <h1>404</h1>
            <div className={s.error}>
                <h2>Страница не найдена</h2>
                <div className={s.smile_crying}></div>
            </div>
            <div className={s.text_box}>
                <p>Возможно, она была удалена</p>
                <p>или перенесена на другой адрес</p>
            </div>
            
            <button className={s.btn_back}>Вернуться на главную</button>
        </div>
    )
}