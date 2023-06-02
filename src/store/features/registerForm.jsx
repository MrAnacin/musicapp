import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePostRegMutation} from '../../store/api/musicApi';
import s from '../../pages/signup/signup.module.css';
import sprite from '../../img/icon/sprite.svg'

export const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [passRep, setPassRep] = useState('');
    const navigate = useNavigate();


    const [postReg, {isSuccess, isError, isLoading}] = usePostRegMutation()

    const handleClickReg = async () => {
        if(pass !== passRep){
            alert('Пароль не совпадает')           
            return
        }
            await postReg({
            "email": email,
            "password": pass,
            "username": email,
        }).unwrap()
        
    
} 
if (isError) return alert('Ошибка данных')
if (isSuccess) navigate('/login');
if (isLoading) return alert('Добро пожаловать!')

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
                placeholder="Email" />

                <input
                className={s.login_input}
                id="password"
                type="password"
                onChange={(e) => setPass(e.target.value)}
                placeholder="Пароль" />

                <input
                className={s.login_input}
                id="password"
                type="password"
                onChange={(e) => setPassRep(e.target.value)}
                placeholder="Повторите пароль" />
               
                            <div className={s.btn_box}>
           <button className={s.btn_login} onClick={handleClickReg}>Зарегистрироваться</button>  
       </div>
       
   </div>
        
                                   
                   
    );
};