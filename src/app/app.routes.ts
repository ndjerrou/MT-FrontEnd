import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PaiementsComponent } from './paiements/paiements.component';
import { MyAccountComponent } from '../app/my-account/my-account.component'

export const ROUTES: Routes = [
    { path: '', component: MyAccountComponent },
    { path: 'paids', component: PaiementsComponent } 
];