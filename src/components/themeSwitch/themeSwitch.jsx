import React from 'react'
import s from './themeSwitch.module.css'
import sprite from '../../img/icon/sprite.svg'


const ThemeSwitch = ({ value, onChange }) => {
  const icon = value ? "light" : "dark"; // определяем иконку в зависимости от значения value
 
  return (
    <div className={s.btn_theme_svg}>
      <svg 
        className={s.btn_theme_svg}
        alt="theme"
        onClick={onChange}
        >
        <use xlinkHref={`${sprite}#theme-${icon}`} />
      </svg>
    </div>
  );
};

export default ThemeSwitch