import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './pages/home/home.component';
import { SareesComponent } from './pages/sarees/sarees.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CollectionsComponent } from './pages/collections/collections.component';
import { CartComponent } from './pages/cart/cart.component';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
  declarations: [HomeComponent, SareesComponent, CollectionsComponent, CartComponent,SearchComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
  ],
})
export class AppModule {}
