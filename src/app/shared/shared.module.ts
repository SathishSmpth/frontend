import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

import { NavbarComponent } from './ui/navbar/navbar.component';
import { HeaderComponent } from './ui/header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './ui/footer/footer.component';
import { LogoComponent } from './ui/logo/logo.component';
import { AddToCartButtonComponent } from './ui/add-to-cart-button/add-to-cart-button.component';
import { BuyNowButtonComponent } from './ui/buy-now-button/buy-now-button.component';
import { ModalComponent } from './ui/modal/modal.component';
import { ProductCardComponent } from './ui/product-card/product-card.component';
import { ProductListsComponent } from './ui/product-lists/product-lists.component';
import { ProductOverviewComponent } from './ui/product-overview/product-overview.component';
import { ResponsiveContainerComponent } from './ui/responsive-container/responsive-container.component';
import { CartProductCardComponent } from './ui/cart-product-card/cart-product-card.component';
import { HorizontalProductCardComponent } from './ui/horizontal-product-card/horizontal-product-card.component';
import { FormContainerComponent } from './ui/form/form-container/form-container.component';
import { MatCardModule } from '@angular/material/card';
import { CarouselComponent } from './ui/carousel/carousel.component';
import { HeroSectionComponent } from './ui/hero-section/hero-section.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    AddToCartButtonComponent,
    BuyNowButtonComponent,
    ModalComponent,
    ProductCardComponent,
    ProductListsComponent,
    ProductOverviewComponent,
    ResponsiveContainerComponent,
    CartProductCardComponent,
    HorizontalProductCardComponent,
    FormContainerComponent,
    CarouselComponent,
    HeroSectionComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    LogoComponent,
    HeaderComponent,
    AddToCartButtonComponent,
    BuyNowButtonComponent,
    ModalComponent,
    ProductCardComponent,
    ProductListsComponent,
    ProductOverviewComponent,
    HorizontalProductCardComponent,
    FormContainerComponent,
    CarouselComponent,
    HeroSectionComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    RouterModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    MatCardModule,
  ],
})
export class SharedModule {}
