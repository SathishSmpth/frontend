import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  shoppingCart: Product[] = [
    {
      productId: 1,
      title: 'string',
      description: 'string',
      category: 'string',
      images: [
        'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb',
        'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb',
        'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb',
        'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb',
      ],
      thumbnail: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb',
      price: 0,
      availableSizes: ['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'],
      availableColors: ['#fcba03', '#fcba03', '#fcba03'],
      availableStocks: 10,
      createdBy: 'string',
      createdOn: '2023-12-17T21:14:39.65237',
      updatedOn: '2023-12-17T21:14:39.65237',
    },
    {
      productId: 2,
      title: 'string',
      description: 'string',
      category: 'string',
      images: [
        'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb',
        'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb',
        'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb',
        'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb',
      ],
      thumbnail: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb',
      price: 0,
      availableSizes: ['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'],
      availableColors: ['#fcba03', '#fcba03', '#fcba03'],
      availableStocks: 10,
      createdBy: 'string',
      createdOn: '2023-12-17T21:14:41.708505',
      updatedOn: '2023-12-17T21:14:41.708505',
    },
    {
      productId: 3,
      title: 'string',
      description: 'string',
      category: 'string',
      images: [
        'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb',
        'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb',
        'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb',
        'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb',
      ],
      thumbnail: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb',
      price: 0,
      availableSizes: ['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'],
      availableColors: ['#fcba03', '#fcba03', '#fcba03'],
      availableStocks: 10,
      createdBy: 'string',
      createdOn: '2023-12-17T21:14:45.946513',
      updatedOn: '2023-12-17T21:14:45.946513',
    },
  ];

  constructor() {}

  convertHexToName(hexColor: string) {
    // return new ColorName(hexColor);
  }
}
