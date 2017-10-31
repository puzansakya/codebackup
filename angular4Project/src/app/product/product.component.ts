import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title;
  products = [];
  rows = [];
  columns = [];

  constructor(public productService: ProductService) {
    this.title = "Product List."
  }

  ngOnInit() {
    this.columns = [
      { prop: 'ID' },
      { name: 'name' },
      { name: 'price' },
      { name: 'Description' },
      { name: 'Code' },
      { name: 'Color' }
    ];
    this.productService.getProducts().subscribe(data => this.products = data.json());
  }

}
