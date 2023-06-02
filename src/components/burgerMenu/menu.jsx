import React from 'react';
import s from './menu.module.css';
import { NavBar } from '../navbar/navbar'
import { ThemeContext, themes } from '../../contexts/ThemeContext'
import ThemeSwitch from '../themeSwitch/themeSwitch'



    const Menu = ({active, setActive}) => {
    return (
        <div>
            
            <div className={`${s.menu} ${active ? s.active : ''}`} onClick={() => setActive(false)}> 
             <div className={s.nav__menu}>
                 <ul className={s.menu__list}>
                 <NavBar/>
                 <ThemeContext.Consumer> 
                {({ theme, setTheme }) => ( 
                    <ThemeSwitch 
                    onChange={() => { 
                        if (theme === themes.light) setTheme(themes.dark) 
                        if (theme === themes.dark) setTheme(themes.light) 
                    }} 
                    value={theme === themes.dark} 
                    >
                    
                    </ThemeSwitch> 
                )} 
                </ThemeContext.Consumer> 
                 </ul>
             </div>
         </div>
        </div>

    )
}

export default Menu;
