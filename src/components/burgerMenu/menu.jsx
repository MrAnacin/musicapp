import React from "react";
import  './menu.css';

const Menu = ({item, active, setActive}) => {
    return (
        <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
            <div className="nav__menu">
                <ul className="menu__list">
                    { 
                    item.map((item) => 
                        <li className="menu__item" key={item.id}>
                            <a href={item.href}>{item.value}</a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Menu;
