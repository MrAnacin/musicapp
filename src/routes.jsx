import React from 'react';
import {Routes, Route} from "react-router-dom"
import {Login} from './pages/signup/login'
import {Registration} from './pages/signup/registration'
import {NotFound} from './pages/not-found/notfound'
import { ProtectedRoute } from './components/protected-route';
import { Main } from './pages/main/main';
import {Favorites} from './pages/favorites/favorites'
import {SelectionPage} from './pages/selection/selectionPage'
import Profile from './pages/profile/profile';


export const AppRoutes = () => {

    const token = localStorage.getItem('token'); 

    return (
        <Routes>    
            <Route path="/login" element={<Login/> } />        
            <Route path="/registration" element={<Registration />} />
            <Route path="*" element={<NotFound />} />
            
            <Route element={<ProtectedRoute isAllowed={Boolean(token)} />}>
                <Route path="/" element={<Main />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/selection/playlist/:id" element={<SelectionPage />} />
            </Route>
            
        </Routes>
    )
}