import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePostTokenMutation, usePostLoginMutation } from '../api/musicApi';
import { useDispatch } from 'react-redux';
import { userLogin } from '../slices/userSlice';
import s from '../../pages/signup/signup.module.css';
import sprite from '../../img/icon/sprite.svg'

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');    
    const navigate = useNavigate();
    const dispatch = useDispatch()
  
    // eslint-disable-next-line no-empty-pattern
    const [postToken, {}] = usePostTokenMutation();
    // eslint-disable-next-line no-empty-pattern
    const [postLogin, {}] = usePostLoginMutation();

    const handleLogin = async () => {  
 
        await postToken({email, password}).unwrap()  
        .then ((token) => {  
            // console.log(token); 
     
            // Сохраняем token в localStorage
            localStorage.setItem('token', token.refresh);
     
            postLogin({ email, password }) 
            .then((user) => { 
                // console.log(user) 
                dispatch(userLogin({ 
                    email: user.data.email, 
                    id: user.data.id, 
                    token: token.refresh 
                })); 
             
                navigate('/') 
            })
            .catch(error => {
                console.log(error);
                // Выводим ошибку на экране
                alert(`Ошибка при получении токена. Попробуйте еще раз.`);
            });
        })
        .catch(error => {
            console.log(error);
            // Выводим ошибку на экране
            alert(`Ошибка ${error.status}: ${error.data.detail}`);
        });
    }   

    function handleRegistration() {
        navigate('/registration');
    }

    return (
        <div className={s.form}>

             <div className={s.logo}>
            <svg className={s.logo_svg} alt="logo" >
              <use xlinkHref={`${sprite}#logo-light`}></use>
            </svg> 
            </div>
            
            <input
            className={s.login_input}
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email" 
            />

            <input 
            className={s.login_input}
            id="password" 
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль"/>

            <div className={s.btn_box}>
                <button className={s.btn_login} onClick={handleLogin}>Войти</button> 
                <button className={s.btn_reg} onClick={handleRegistration}>Зарегистрироваться</button>  
            </div>
                
               
        </div>
        
              
                
    );
};