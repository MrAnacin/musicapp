import React from 'react';
import s from './search.module.css';
import sprite from '../../img/icon/sprite.svg'

function Search() {
  return (
    <div className={s.search}>
      <svg className={s.svg}>
        <use xlinkHref={`${sprite}#icon-search`}></use>
      </svg>
      <input className={s.text} type="search" placeholder="Поиск" name="search"/>
    </div>
    )
}

export default  Search;