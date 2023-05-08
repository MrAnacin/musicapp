import React from 'react';
import s from './playlistitem.module.css';
import sprite from '../../img/icon/sprite.svg'
import SkeletonLoading from '../skeletonLoading';


const PlaylistItem = (props) => {
    return (
        <div className="block">
            <div className={s.content}>
                <div className={s.item}>
                    <div className={s.track}>
                        <div className={s.track_title}>
                            <div className={s.title_image}>
                                <SkeletonLoading width={51} height={51}>
                                    <svg className={s.title_svg} alt="music">
                                        <use xlinkHref={`${sprite}#icon-note`}></use>
                                    </svg>
                                </SkeletonLoading>      
                            </div>
                            <div className={s.title_text}>
                                <SkeletonLoading width={350} height={25}>
                                    <a className={s.title_link} href="http://">{props.track.title} <span className="track__title-span"></span></a>
                                </SkeletonLoading>
                            </div>
                        </div>
                            <div className={s.author}>
                                <SkeletonLoading width={300} height={25}>
                                        <a className={s.author_link} href="http://">{props.track.author}</a>
                                </SkeletonLoading>
                            </div>
                            <div className={s.album}>
                                <SkeletonLoading width={320} height={25}>
                                    <a className={s.album_link} href="http://">{props.track.album}</a>
                                </SkeletonLoading>
                            </div>
                            <div className={s.time}>
                                    <svg className={s.time_svg} alt="time">
                                        <use xlinkHref={`${sprite}#icon-like`}></use>
                                    </svg>
                                    <span className={s.time_text}>{props.track.time}</span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaylistItem;
