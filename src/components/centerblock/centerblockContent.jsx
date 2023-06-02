import React from 'react';
import s from'./centerblock.module.css';
import sprite from '../../img/icon/sprite.svg'
import Playlist from '../playlist/playlist-mail';

function CenterblockContent() {
   return (
    <div className={s.content}>
       <div className={s.content_title}>
          <div className={s.title_track} >Трек</div>
          <div className={s.title_author}>ИСПОЛНИТЕЛЬ</div>
          <div className={s.title_album}>АЛЬБОМ</div>
          <div className={s.title_time}>
            <svg className={s.time_svg} alt="time">
              <use xlinkHref={`${sprite}#icon-watch`}></use>
            </svg>
          </div>
      </div>
      <div className={s.playlist}>   
      <Playlist />
        </div>
    </div>
    )
}

export default CenterblockContent;