import React from 'react';
import s from './sidebarBlock.module.css';
import playlist01 from '../../img/playlist01.png'
import playlist02 from '../../img/playlist02.png'
import playlist03 from '../../img/playlist03.png'
import SkeletonLoading from '../skeleton/skeletonLoading';
import { NavLink } from 'react-router-dom';



function SidebarBlock() {
              
  return (
    <div className={s.block}>
        <div className={s.list}>
            <div className={s.item}>
           

            
            <NavLink className={s.btn_login} to="/selection/playlist/1">
              <SkeletonLoading width={250} height={150}>
                <img className={s.img} src={playlist01} alt=""/>
                </SkeletonLoading>
              </NavLink>
            
            </div>
            <div className={s.item}>
            <NavLink className={s.btn_login} to="/selection/playlist/2">
              <SkeletonLoading width={250} height={150}>
                <img className={s.img} src={playlist02} alt=""/>
                </SkeletonLoading>
              </NavLink>
            </div>
            <div className={s.item}>
            <NavLink className={s.btn_login} to="/selection/playlist/3">
              <SkeletonLoading width={250} height={150}>
                <img className={s.img} src={playlist03} alt=""/>
                </SkeletonLoading>
              </NavLink>
            </div>
        </div>
    </div>

  )
}

export default SidebarBlock;