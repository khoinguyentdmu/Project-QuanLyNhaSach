import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './client/component/main-content/main-content.component';
import { InfoBookComponent } from './client/component/info-book/info-book.component';
import { CartComponent } from './client/component/cart/cart.component';
import { LoginComponent } from './admin/component/login/login.component';
import { TrackMyOrderComponent } from './client/component/track-my-order/track-my-order.component';
import { AdminCrudComponent } from './admin/component/admin-crud/admin-crud.component';
import { OrderInfoComponent } from './client/component/order-info/order-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: MainContentComponent },
  { path: 'infoBook/:id', component: InfoBookComponent },
  { path: 'your-cart', component: CartComponent},
  { path: 'login', component: LoginComponent},
  { path: 'track-my-order', component: TrackMyOrderComponent},
  { path: 'admin-curd', component: AdminCrudComponent},
  { path: 'order-info', component: OrderInfoComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
