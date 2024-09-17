import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  {
    path: 'euSou',
    loadChildren: () => import('./eu-sou/euSou.module').then( m => m.EuSouPageModule)
  },
  {
    path: 'home/:tipoUsuario',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'euSou',
    pathMatch: 'full'
  },
  {
    path: 'login/:tipoUsuario',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro/:tipoUsuario',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'wizard',
    loadChildren: () => import('./components/menu/menu.module').then(m => m.MenuModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
