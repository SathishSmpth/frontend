import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.interface';

@Component({
  selector: 'app-horizontal-product-card',
  templateUrl: './horizontal-product-card.component.html',
  styleUrls: ['./horizontal-product-card.component.scss'],
})
export class HorizontalProductCardComponent {
  @Input() products!: Product[];
}
