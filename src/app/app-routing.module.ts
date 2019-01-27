import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListsClientComponent } from './components/lists-client/lists-client.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path :"" , component : ListsClientComponent,canActivate:[AuthGuard]},
  {path :"login" , component : LoginComponent},
  {path :"register" , component : RegisterComponent},
  {path :"add" , component : AddClientComponent,canActivate:[AuthGuard]},
  {path :"edit/:id" , component : EditClientComponent,canActivate:[AuthGuard]},
  {path :"**" , component : PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
