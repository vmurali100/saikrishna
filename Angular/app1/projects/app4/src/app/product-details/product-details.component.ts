import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  id:number=0
  product :any
  constructor(private route:ActivatedRoute,private _http:HttpClient) { }
  ngOnInit(): void {
    console.log(this.route.params)
    this.route.params.subscribe(res=>{
      console.log(res)
      this.id=res.id
      this._http.get(`https://fakestoreapi.com/products/${this.id}`).subscribe(response=>{
        console.log(response)
        this.product=response
      })
    })
  }

}
