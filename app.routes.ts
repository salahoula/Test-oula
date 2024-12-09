import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { PostListComponent } from '../app.moduls';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'posts', component: PostListComponent },
    { path: 'auth', component: AuthentificationComponent },
    { path: '', redirectTo: '/posts', pathMatch: 'full' },
  
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
  })
  export class AppRoutingModule {}