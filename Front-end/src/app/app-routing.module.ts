import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './client/component/book/book.component';
import { InfoBookComponent } from './client/component/info-book/info-book.component';
import { CartComponent } from './client/component/cart/cart.component';
import { LoginComponent } from './admin/component/login/login.component';
import { TrackMyOrderComponent } from './client/component/track-my-order/track-my-order.component';
import { AdminCrudComponent } from './admin/component/admin-crud/admin-crud.component';
import { OrderInfoComponent } from './client/component/order-info/order-info.component';
import { ManageBookCategoryComponent } from './admin/component/manage-book-category/manage-book-category.component';
import { ManageBookComponent } from './admin/component/manage-book/manage-book.component';
import { ManageCommentComponent } from './admin/component/manage-comment/manage-comment.component';
import { ManageOrderBookComponent } from './admin/component/manage-order-book/manage-order-book.component';
import { ManagePostsComponent } from './admin/component/manage-posts/manage-posts.component';
import { InfoBookCategoryComponent } from './admin/component/info-book-category/info-book-category.component';

const routes: Routes = [
  { path: '', redirectTo: 'book', pathMatch: 'full' },
  { path: 'book', component: BookComponent },
  { path: 'info-book/:id', component: InfoBookComponent },
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
  { path: 'infoBook/:id', component: InfoBookComponent },
  { path: 'your-cart', component: CartComponent},
  { path: 'login', component: LoginComponent},
  { path: 'track-my-order', component: TrackMyOrderComponent},
  { path: 'admin', component: AdminCrudComponent,
    children: [
      {path: '', redirectTo: 'book-category', pathMatch: 'full'},
      {path: 'book-category', component: ManageBookCategoryComponent},
      {path: 'book', component: ManageBookComponent},
      {path: 'comment', component: ManageCommentComponent},
      {path: 'order-book', component: ManageOrderBookComponent},
      {path: 'posts', component: ManagePostsComponent},
      {path: 'info-book-category', component: InfoBookCategoryComponent},
      {path: 'info-book-category/:id', component: InfoBookCategoryComponent}
    ]
  },
  { path: 'order-info', component: OrderInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
