import React from 'react';
import s from './personal.module.css';
import sprite from '../../img/icon/sprite.svg'

function Personal() {
  
  return (
    <div className={s.personal}>
      <div className={s.avatar}/>
      <svg className={s.icon_svg} alt="icon-exit" >
          <use xlinkHref={`${sprite}#icon-exit`}></use>
      </svg> 
  </div>
    
    )
}

export default Personal;