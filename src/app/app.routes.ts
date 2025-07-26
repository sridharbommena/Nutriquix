import { Routes } from '@angular/router';
import { Register } from './components/register/register';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { Unauthorized } from './components/unauthorized/unauthorized';
import { Landing } from './components/landing/landing';
import { MainLayout } from './components/main-layout/main-layout';
import { AuthGuard, RedirectGuard } from './guards/auth-guard-guard';

export const routes: Routes = [
    {
        path: "",
        component: Landing,
        canActivate: [RedirectGuard],
    },
    {
        path: "",
        component: MainLayout,
        canActivateChild: [AuthGuard],
        children: [
            {
                path: "home",
                component: Home,
            }
        ]

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
        path: "unauthorized",
        component: Unauthorized
    }
];
