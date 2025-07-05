import { Routes } from '@angular/router';
import { Landing } from './components/landing/landing';
import { Register } from './components/register/register';
import { Login } from './components/login/login';
import { Home } from './components/home/home';

export const routes: Routes = [
    {
        path: "",
        component: Landing
    },
    {
        path: "register",
        component: Register
    },
    {
        path: "login",
        component: Login
    },
    {
        path: "home",
        component: Home,
        // canActivate: //TODO: Add a AuthGuard
    }
];
