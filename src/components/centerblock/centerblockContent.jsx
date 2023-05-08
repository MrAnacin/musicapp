import React from 'react';
import s from'./centerblock.module.css';
import PlaylistItem from '../playlist/playlistItem';
import sprite from '../../img/icon/sprite.svg'

function CenterblockContent() {
  return (
    <div className={s.content}>
       <div className={s.content_title}>
          <div className={s.title_col}>Трек</div>
          <div className={s.title_col}>ИСПОЛНИТЕЛЬ</div>
          <div className={s.title_col}>АЛЬБОМ</div>
          <div className={s.title_col}>
            <svg className={s.time_svg} alt="time">
              <use xlinkHref={`${sprite}#icon-watch`}></use>
            </svg>
          </div>
      </div>
      <div className={s.playlist}>   
        <PlaylistItem track={{id: 1, title: 'Guilt',author: 'Nero',album: 'Welcome Reality', time:'4:44'}}/>
        <PlaylistItem track={{id: 2,title: 'Elektro',author: 'Dynoro, Outwork, Mr. Gee',album: 'Elektro', time:'2:22'}}/>
        <PlaylistItem track={{id: 3,title: 'I’m Fire',author: 'Ali Bakgor',album: 'I’m Fire', time:'2:22'}}/>
        <PlaylistItem track={{id: 4,title: 'Non Stop',author: 'Стоункат, Psychopath',album: 'Non Stop', time:'4:12'}}/>
        <PlaylistItem track={{id: 5,title: 'Run Run',author: 'Jaded, Will Clarke, AR/CO',album: 'Run Run', time:'2:54'}}/>
        </div>
    </div>
    )
}

export default CenterblockContent;