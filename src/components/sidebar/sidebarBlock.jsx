import React from 'react';
import s from './sidebarBlock.module.css';
import playlist01 from '../../img/playlist01.png'
import playlist02 from '../../img/playlist02.png'
import playlist03 from '../../img/playlist03.png'
import SkeletonLoading from '../skeletonLoading';


function SidebarBlock() {
  return (
    <div className={s.block}>
        <div className={s.list}>
            <div className={s.item}>
            <a className={s.link} href="#">

            <SkeletonLoading width={250} height={150}>
                    <img className={s.img} src={playlist01} alt="day's playlist"/>
                </SkeletonLoading>
            </a>
            </div>
            <div className={s.item}>
                <a className={s.link} href="#">
                <SkeletonLoading width={250} height={150}>
                <img className={s.img} src={playlist02} alt="100 dance hit"/>
                </SkeletonLoading>
                </a>
            </div>
            <div className={s.item}>
                <a className={s.link} href="#">
                <SkeletonLoading width={250} height={150}>
                <img className={s.img} src={playlist03} alt="indi-energy"/>
                </SkeletonLoading>
                </a>
            </div>
        </div>
    </div>

  )
}

export default SidebarBlock;