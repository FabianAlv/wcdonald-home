import { Component, Input, OnInit } from '@angular/core';
import { Promo } from 'src/models/promo';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {

  @Input() promo: Promo;

  constructor() { }

  ngOnInit(): void {
  }

}
