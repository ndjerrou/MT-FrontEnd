import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PaiementsComponent } from './paiements/paiements.component';
import { RouterModule } from '@angular/router';
import  { ROUTES }  from './app.routes';
import { MyAccountComponent } from './my-account/my-account.component'; 

@NgModule({
  declarations: [
    AppComponent,
    PaiementsComponent,
    MyAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
