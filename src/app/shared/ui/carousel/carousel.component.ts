import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input() items!: Product[];
}
