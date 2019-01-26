import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListsClientComponent } from './components/lists-client/lists-client.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';

const routes: Routes = [
  {path :"" , component : ListsClientComponent},
  {path :"add" , component : AddClientComponent},
  {path :"edit/:id" , component : EditClientComponent},
  {path :"**" , component : PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
