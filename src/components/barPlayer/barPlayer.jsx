import React from 'react';
import s from './barPlayer.module.css';
import sprite from '../../img/icon/sprite.svg'
import SkeletonLoading from '../skeletonLoading';


function BarPlayer() {
  return (
    
        <div className={s.content}>
        <div className={s.player_progress}></div>
        <div className={s.player_block}>
            <div className={s.player}>
                <div className={s.player__controls}>
                    <div className="player__btn-prev">
                        <svg className="player__btn-prev-svg" alt="prev">
                            <use xlinkHref={`${sprite}#icon-prev`}></use>
                        </svg>
                    </div>
                    <div className="player__btn-play _btn">
                        <svg className="player__btn-play-svg" alt="play">
                            <use xlinkHref={`${sprite}#icon-play`}></use>
                        </svg>
                    </div>
                    <div className="player__btn-next">
                        <svg className="player__btn-next-svg" alt="next">
                            <use xlinkHref={`${sprite}#icon-next`}></use>
                        </svg>
                    </div>
                    <div className="player__btn-repeat _btn-icon">
                        <svg className="player__btn-repeat-svg" alt="repeat">
                            <use xlinkHref={`${sprite}#icon-repeat`}></use>
                        </svg>
                    </div>
                    <div className="player__btn-shuffle _btn-icon">
                        <svg className="player__btn-shuffle-svg" alt="shuffle">
                            <use xlinkHref={`${sprite}#icon-shuffle`}></use>
                        </svg>
                    </div>
                </div>
                <div className="player__track-play track-play">
                    <div className="track-play__contain">
                    <div className="track-play__image">
                        <SkeletonLoading width={51} height={51}>
                            <svg className="track-play__svg" alt="music">
                                <use xlinkHref={`${sprite}#icon-note`}></use>
                            </svg>
                        </SkeletonLoading>
                        </div>
                        <div className="track-play__author">
                        <SkeletonLoading width={50} height={15}>
                            <a className="track-play__author-link" href="http://">Ты та...</a>
                            </SkeletonLoading>
                        </div>
                        <div className="track-play__album">
                        <SkeletonLoading width={50} height={15}>
                            <a className="track-play__album-link" href="http://">Баста</a>
                            </SkeletonLoading>
                        </div>
                    </div>
                    <div className="track-play__like-dis">
                        <div className="track-play__like _btn-icon">
                            <svg className="track-play__like-svg" alt="like">
                                <use xlinkHref={`${sprite}#icon-like`}></use>
                            </svg>
                        </div>
                        <div className="track-play__dislike _btn-icon">
                            <svg className="track-play__dislike-svg" alt="dislike">
                                <use xlinkHref={`${sprite}#icon-dislike`}></use>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bar__volume-block volume">
               <div className="volume__content">
                    <div className="volume__image">
                        <svg className="volume__svg" alt="volume">
                            <use xlinkHref={`${sprite}#icon-volume`}></use>
                        </svg>
                    </div>
                    <div className="volume__progress _btn">
                        <input className="volume__progress-line _btn" type="range" name="range"/>
                    </div>
               </div>
            </div>
        </div>
        </div>
   
     
    )
}

export default  BarPlayer;
