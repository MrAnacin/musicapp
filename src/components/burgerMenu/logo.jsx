import React from 'react';
import s from './menu.module.css';
import Logo_light from '../../img/icon/logo-light.svg';
import Logo_dark from '../../img/icon/logo-dark.svg';
import { useTheme } from '../../hooks/useTheme';

function Logo() {
    const theme = useTheme();


  return (
    <div className={s.logo}>
    <img className={s.logo_svg}
         src={ theme.theme ==='light' ? Logo_light : Logo_dark } alt="logo">
    </img>
</div>

    )
}

export default Logo;