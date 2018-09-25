import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './client/header/header.component';
import { ContainerComponent } from './client/container/container.component';
import { FooterComponent } from './client/footer/footer.component';
import { MainNavComponent } from './client/main-nav/main-nav.component';
import { AsideLeftComponent } from './client/aside-left/aside-left.component';
import { MainContentComponent } from './client/main-content/main-content.component';
import { ProductSliderComponent } from './client/product-slider/product-slider.component';
import { BannerSliderComponent } from './client/banner-slider/banner-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
    MainNavComponent,
    AsideLeftComponent,
    MainContentComponent,
    ProductSliderComponent,
    BannerSliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
