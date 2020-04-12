import { Component, OnInit } from '@angular/core';
import { Products} from '../products';
import { ProductsService} from '../products.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Products[];
  constructor(private  _productsService: ProductsService,
              private router: Router) { }

  ngOnInit(): void {
    this._productsService.getProducts()
      .subscribe((data: Products[]) => {
        this.products = data;
        console.log(this.products);
      });
  }

}
