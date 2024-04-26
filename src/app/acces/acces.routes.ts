import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const ACCES_ROUTES: Routes = [
    ////////////////////////    Rutas   ////////////////////////
    {
        path: 'login', 
        component: LoginComponent,
    },
    {
        path: 'register-user',  
        component: RegisterComponent,
    },
];