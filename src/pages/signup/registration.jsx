import React from 'react';
import s from './signup.module.css';
import { RegisterForm } from '../../store/features/registerForm';

export const Registration = () => {

  return (
    <div>
      <div className={s.login_form}>
        <div className={s.container}>
          <RegisterForm/>
        </div>
      </div>
    </div>
  )
}

export default Registration;



