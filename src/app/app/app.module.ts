import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './pages/home/home.component';
import { SareesComponent } from './pages/sarees/sarees.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { CollectionsComponent } from './pages/collections/collections.component';
import { CartComponent } from './pages/cart/cart.component';

@NgModule({
  declarations: [HomeComponent, SareesComponent, CollectionsComponent, CartComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    ComponentsModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
  ],
})
export class AppModule {}
