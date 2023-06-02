import { NavLink } from "react-router-dom";
import cn from "classnames";
import React from 'react';
import s from './navbar.module.css'
import { useDispatch } from "react-redux";
import {userLogout} from '../../store/slices/userSlice'
import { useNavigate } from "react-router-dom";


export const NavBar = () => {

  const activeClassName = "underline";
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const hangleLogout = (e) => {
    e.preventDefault();

    dispatch(userLogout())
    localStorage. removeItem('refresh_token')
    navigate("/login");
  };

  return (
    <div>
       <nav>
         <ul className={s.NavBar_list}>

         <li>
             
             <NavLink
              to="/"
              className={({ isActive }) =>
                cn("App-link", {
                  [activeClassName]: isActive,
                })
              }
            >
              Главная
             </NavLink>
           </li>

           <li>
             
             <NavLink
              to="/favorites"
              className={({ isActive }) =>
                cn("App-link", {
                  [activeClassName]: isActive,
                })
              }
            >
              Мои треки
             </NavLink>
           </li>

           <li>
             
             <NavLink
              to="/login"
              onClick={(e) => hangleLogout(e)}
            >
              Выйти
             </NavLink>
           </li>
         </ul>
         </nav>
         
       
     </div>
  );
};