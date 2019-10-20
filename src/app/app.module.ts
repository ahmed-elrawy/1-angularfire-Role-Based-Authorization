import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//components 
import { AppComponent } from './app.component';
import { SubscriberPageComponent } from './components/subscriber-page/subscriber-page.component';
import { SuperSecretComponent } from './components/super-secret/super-secret.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

// 1. Import the libs Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth'

import { environment } from 'src/environments/environment';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SubscriberPageComponent,
    SuperSecretComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule,
    AngularFireAuthModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
