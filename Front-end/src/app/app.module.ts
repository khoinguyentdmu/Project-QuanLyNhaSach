import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './client/component/header/header.component';
import { ContainerComponent } from './client/component/container/container.component';
import { FooterComponent } from './client/component/footer/footer.component';
import { MainNavComponent } from './client/component/main-nav/main-nav.component';
import { AsideLeftComponent } from './client/component/aside-left/aside-left.component';
import { ProductSliderComponent } from './client/component/product-slider/product-slider.component';
import { BannerSliderComponent } from './client/component/banner-slider/banner-slider.component';
import { PaginationComponent } from './client/component/pagination/pagination.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientComponent } from './client/component/client.component';
import { MainContentComponent } from './client/component/main-content/main-content.component';
import { InfoBookComponent } from './client/component/info-book/info-book.component';
import { ReviewBookComponent } from './client/component/review-book/review-book.component';
import { CommentForBookComponent } from './client/component/comment-for-book/comment-for-book.component';
import { CartComponent } from './client/component/cart/cart.component';
import { LoginComponent } from './admin/component/login/login.component';
import { TrackMyOrderComponent } from './client/component/track-my-order/track-my-order.component';
import { AdminCrudComponent } from './admin/component/admin-crud/admin-crud.component';
import { ManageBookCategoryComponent } from './admin/component/manage-book-category/manage-book-category.component';
import { OrderInfoComponent } from './client/component/order-info/order-info.component';
import { AllBookComponent } from './client/component/all-book/all-book.component';
import { ManageListComponent } from './admin/component/manage-list/manage-list.component';
import { ManageBookComponent } from './admin/component/manage-book/manage-book.component';
import { ManageCommentComponent } from './admin/component/manage-comment/manage-comment.component';
import { ManageOrderBookComponent } from './admin/component/manage-order-book/manage-order-book.component';
import { ManagePostsComponent } from './admin/component/manage-posts/manage-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
    MainNavComponent,
    AsideLeftComponent,
    ProductSliderComponent,
    BannerSliderComponent,
    PaginationComponent,
    ClientComponent,
    MainContentComponent,
    InfoBookComponent,
    ReviewBookComponent,
    CommentForBookComponent,
    CartComponent,
    LoginComponent,
    TrackMyOrderComponent,
    AdminCrudComponent,
    ManageBookCategoryComponent,
    OrderInfoComponent,
    AllBookComponent,
    ManageListComponent,
    ManageBookComponent,
    ManageCommentComponent,
    ManageOrderBookComponent,
    ManagePostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
