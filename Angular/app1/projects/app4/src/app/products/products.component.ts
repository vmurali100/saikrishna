import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any = []
  constructor(private _http: HttpClient,private route:Router) { }

  ngOnInit(): void {
    this._http.get("https://fakestoreapi.com/products").subscribe(res => {
      console.log(res)
      this.products = res
    })
  }

  showProductDetails(product: any) {
    console.log(product)
    this.route.navigate([`products/${product.id}`])
  }

}
