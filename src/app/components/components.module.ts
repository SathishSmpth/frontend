import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';

import { ProductListsComponent } from './product-lists/product-lists.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [
    ProductListsComponent,
    ProductOverviewComponent,
    ProductCardComponent,
  ],
  exports: [
    ProductListsComponent,
    MatCardModule,
    ProductOverviewComponent,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatExpansionModule,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    HttpClientModule,
    RouterModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatExpansionModule,
  ],
})
export class ComponentsModule {}
