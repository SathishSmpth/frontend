import { Component, OnDestroy } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    private dialog: MatDialog,
    private router:Router
  ) {}
  searchResult: Product[] = [
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
      product_id: 2,
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
      product_id: 3,
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
    {
      product_id: 3,
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

  // ngOnInit() {
  //   this.router.events.subscribe((event) => {
  //     if (event instanceof NavigationEnd) {
  //       this.dialog.close();
  //     }
  //   });
  // }
}
