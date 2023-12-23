import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interface';

@Component({
  selector: 'app-sarees',
  templateUrl: './sarees.component.html',
  styleUrls: ['./sarees.component.scss'],
})
export class SareesComponent implements OnInit {
  products!: Product[];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Product[]>('http://localhost:8080/api/v1/products')
      .subscribe((res) => {
        this.products = res;
      });
  }
}
