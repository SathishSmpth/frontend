import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.interface';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss'],
})
export class CollectionsComponent implements OnInit {
  product!: Product;
  productId!: any;
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.productId = this.route.snapshot.params['productId'];
  }

  ngOnInit(): void {
    this.http
      .get<Product>(`http://localhost:8080/api/v1/products/${this.productId}`)
      .subscribe((res) => {
        this.product = res;
      });
  }
}
