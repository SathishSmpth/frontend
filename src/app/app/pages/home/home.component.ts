import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
