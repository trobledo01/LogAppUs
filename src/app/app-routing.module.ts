import { CommonModule } from '@angular/common';
import { NgModule, ResolvedReflectiveFactory } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
    path: 'auth',
    loadChildren: () => import('./auth--routing/auth--routing.module').then(m => m.AuthRoutingModule)
},
{
  path: 'dashboard',
  loadChildren: () => import('./protected-app/protected-app-routing.module').then(m => m.ProtectedAppRoutingModule)

},
{
  path: '**',
  redirectTo: 'auth'
},


]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
