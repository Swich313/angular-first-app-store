import {Component, OnInit} from '@angular/core';
import {IProduct} from "./data/models/product";
import {ProductsService} from "./services/products.service";
// import {products as data} from "./data/products";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular app';
  // products: IProduct[] = data;
  products: IProduct[] = [];
  loading = false;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.loading = true
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products
      this.loading = false
      console.log(products)
    })
  }


}
