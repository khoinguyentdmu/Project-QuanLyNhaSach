import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './client/component/main-content/main-content.component';
import { InfoBookComponent } from './client/component/info-book/info-book.component';
import { CartComponent } from './client/component/cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: MainContentComponent },
  { path: 'infoBook/:id', component: InfoBookComponent },
  { path: 'your-cart', component: CartComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
