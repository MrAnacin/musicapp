import React, { useState } from 'react';
import s from './style/App.module.css';
import Search from './components/search/search';
import Filter from './components/filter/filter';
import CenterblockContent from './components/centerblock/centerblockContent';
import Personal from './components/personal/personal';
import SidebarBlock from './components/sidebar/sidebarBlock';
import Menu from './components/burgerMenu/menu';
// import BarPlayer from './components/barPlayer/barPlayer';


function App() {
  const [menuActive, setMenuActive] = useState(false)
  const item = [{id: 1, value:"Главное", href: "/main"}, {id: 2,value:"Мои треки", href: "/mytrack"}, {id: 3,value:"Войти", href: "/sign"}]
  return (
    <div>   
      <div className={s.wrapper}>
        <div className={s.container}>
          <main className={s.main}>
          <nav className={s.nav}>
          <div className={s.logo}></div>
            <div className={s.burger_btn} onClick={() => setMenuActive(!menuActive)}>
              <span/>
            </div>
          </nav>
          <div className={s.centerblock}>
            <Search/>
            <Filter/>          
            <CenterblockContent/>
          </div>
          <div className={s.sidebar}>
            <Personal/>
            <SidebarBlock/>
          </div>
      </main>
      {/* <BarPlayer/> */}
      <footer/>
      </div>
    </div>
      <Menu active={menuActive} setActive={setMenuActive} header={""} item={item}/>    
</div>
  );
}

export default App;