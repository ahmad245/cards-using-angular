import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../interface/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
 @Input() product:IProduct;
  constructor() { }

  ngOnInit(): void {
  }

}
