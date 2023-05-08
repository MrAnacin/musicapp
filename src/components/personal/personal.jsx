import React from 'react';
import s from './personal.module.css';


function Personal() {
  return (
    <div className={s.personal}>
      <p className={s.personal_name}>Sergey.Ivanov</p>
      <div className={s.avatar}/>
  </div>
    
    )
}

export default Personal;