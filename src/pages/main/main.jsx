
import React, { useState } from 'react';
import s from '../../style/style.module.css';
import Search from '../../components/search/search';
import Filter from '../../components/filter/filter';
import CenterblockContent from '../../components/centerblock/centerblockContent';
import Personal from '../../components/personal/personal';
import SidebarBlock from '../../components/sidebar/sidebarBlock';
import Menu from '../../components/burgerMenu/menu';
import Logo from '../../components/burgerMenu/logo';
import BarPlayer from '../../components/barPlayer/barPlayer';


export const Main = () => {
  const [menuActive, setMenuActive] = useState(false)
    
    return (  
      <div className={s.container}>
        <main className={s.main}>
          <nav className={s.nav}>
            <Logo/>
            <div className={s.burger_btn} onClick={() => setMenuActive(!menuActive)}>
              <span/>
            </div>
            <Menu active={menuActive} setActive={setMenuActive} header={""} />
          </nav>    
          <div className={s.centerblock}>
            <Search/>
            <h2 className={s.h2}>Треки</h2> 
            <Filter/>        
            <CenterblockContent/>
          </div>
          <div className={s.sidebar}>
            <Personal/>
            <SidebarBlock/>
          </div>
        </main>
        <BarPlayer/>
      </div>
    )
}