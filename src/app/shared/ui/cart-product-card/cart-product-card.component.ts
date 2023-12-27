import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.interface';

@Component({
  selector: 'app-cart-product-card',
  templateUrl: './cart-product-card.component.html',
  styleUrls: ['./cart-product-card.component.scss'],
})
export class CartProductCardComponent {
  @Input() product!: Product;
}
