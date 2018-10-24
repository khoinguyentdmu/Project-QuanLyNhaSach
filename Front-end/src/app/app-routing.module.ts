import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './client/component/book/book.component';
import { InfoBookComponent } from './client/component/info-book/info-book.component';
import { CartComponent } from './client/component/cart/cart.component';
import { LoginComponent } from './admin/component/login/login.component';
import { TrackMyOrderComponent } from './client/component/track-my-order/track-my-order.component';
import { AdminCrudComponent } from './admin/component/admin-crud/admin-crud.component';
import { OrderInfoComponent } from './client/component/order-info/order-info.component';
import { AllBookComponent } from './client/component/all-book/all-book.component';
import { ManageBookCategoryComponent } from './admin/component/manage-book-category/manage-book-category.component';
import { ManageBookComponent } from './admin/component/manage-book/manage-book.component';

const routes: Routes = [
  { path: '', redirectTo: 'book', pathMatch: 'full' },
  {
    path: 'book', component: BookComponent,
    children: [
      { path: '', redirectTo: 'all-book', pathMatch: 'full' },
      { path: 'all-book', component: AllBookComponent },
      { path: 'info/:id', component: InfoBookComponent }
    ]
  },
  { path: 'your-cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'track-my-order', component: TrackMyOrderComponent },
  {
    path: 'admin', component: AdminCrudComponent,
    children: [
      { path: '', redirectTo: 'book-category', pathMatch: 'full' },
      { path: 'book-category', component: ManageBookCategoryComponent },
      { path: 'book', component: ManageBookComponent }
    ]
  },
  { path: 'order-info', component: OrderInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
