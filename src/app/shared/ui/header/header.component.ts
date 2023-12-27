import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  imageUrl =
    'https://plus.unsplash.com/premium_photo-1675098654728-ad113d7db26e';

  products = [
    {
      product_id: 1,
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
      product_id: 1,
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
      product_id: 1,
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
  ];
}
