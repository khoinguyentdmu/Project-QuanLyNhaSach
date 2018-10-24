import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './client/component/main-content/main-content.component';
import { InfoBookComponent } from './client/component/info-book/info-book.component';
import { CartComponent } from './client/component/cart/cart.component';
import { LoginComponent } from './admin/component/login/login.component';
import { TrackMyOrderComponent } from './client/component/track-my-order/track-my-order.component';
import { AdminCrudComponent } from './admin/component/admin-crud/admin-crud.component';
import { OrderInfoComponent } from './client/component/order-info/order-info.component';
import { AllBookComponent } from './client/component/all-book/all-book.component';
import { ManageBookCategoryComponent } from './admin/component/manage-book-category/manage-book-category.component';
import { ManageBookComponent } from './admin/component/manage-book/manage-book.component';
import { ManageCommentComponent } from './admin/component/manage-comment/manage-comment.component';
import { ManageOrderBookComponent } from './admin/component/manage-order-book/manage-order-book.component';
import { ManagePostsComponent } from './admin/component/manage-posts/manage-posts.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: MainContentComponent,
    children: [
      {path: '', redirectTo: 'all-book/all', pathMatch: 'full'},
      {path: 'all-book/:id', component: AllBookComponent},
      {path: 'login', component: LoginComponent}
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
      {path: 'posts', component: ManagePostsComponent}
    ]
  },
  { path: 'order-info', component: OrderInfoComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
