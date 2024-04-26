import { Routes } from '@angular/router';
import { PlatformComponent } from './platform/platform.component';
import { HeaderComponent } from './platform/header/header.component';


export const routes: Routes = [
    ////////////////////////    Rutas   ////////////////////////
    {
        path: 'acces',
        loadChildren: () => import('./acces/acces.routes').then(m => m.ACCES_ROUTES),
    },
    {
        path: 'platform',
        component: PlatformComponent,
    },
    {
        path: 'header',
        component: HeaderComponent,
    },
    ////////////////////////    Redirecciones   ////////////////////////

    //para'/login-user' si entra al inicio
    {
        path: '',
        redirectTo: '/platform',
        pathMatch: 'full'
    }

];
