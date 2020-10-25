import { Component } from '@angular/core';
import { IProduct } from './interface/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 products:IProduct[]=[
   {title:'title1',urlImage:'assets/tree.jpeg',content:'this is first content'},
   {title:'title2',urlImage:'assets/mountain.jpeg',content:'this is second content'},
   {title:'title3',urlImage:'assets/biking.jpeg',content:'this is third content'},
  ];

}
