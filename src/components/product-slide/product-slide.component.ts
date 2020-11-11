import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-product-slide',
  templateUrl: './product-slide.component.html',
  styleUrls: ['./product-slide.component.scss']
})
export class ProductSlideComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
