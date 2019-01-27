import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//routing module
import { AppRoutingModule } from './app-routing.module';
//component 
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ShowClientComponent } from './components/show-client/show-client.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ListsClientComponent } from './components/lists-client/lists-client.component';

//import angular fire
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
//importation du module du formulaire
import {FormsModule} from '@angular/forms';
//flash messages
import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    AddClientComponent,
    EditClientComponent,
    ShowClientComponent,
    PageNotFoundComponent,
    ListsClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    AngularFireAuthModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
