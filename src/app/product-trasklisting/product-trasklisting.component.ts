import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

import { Album } from '../album';



@Component({
  selector: 'app-product-trasklisting',
  templateUrl: './product-trasklisting.component.html',
  styleUrls: ['./product-trasklisting.component.css']
})

export class ProductTrasklistingComponent implements OnInit {

  albumInfo: Album;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);
  }

}
