import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=> import('./modules/layout/layout.module').then((m)=> m.LayoutModule),
  },
  {
    path: 'auth',
    loadChildren: ()=> import('./modules/authentication/authentication.module').then((m) => m.AuthenticationModule)
  },
  {
    path:'**',
    redirectTo: 'error/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
