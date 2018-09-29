import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './client/main-content/main-content.component';
import { InfoBookComponent } from './client/info-book/info-book.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: MainContentComponent },
  { path: 'infoBook', component: InfoBookComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
