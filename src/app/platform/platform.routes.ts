import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PlatformComponent } from './platform.component';

export const ACCES_ROUTES: Routes = [
    ////////////////////////    Rutas   ////////////////////////
    {
        path: '', 
        component: PlatformComponent,
    },
    {
        path: 'header',  
        component: HeaderComponent,
    },
];