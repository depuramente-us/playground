import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products = [
    { id: "1", name: "iPhone 12", price: "$999.99" },
    { id: "2", name: "Samsung Galaxy", price: "$1,199.99" },
    { id: "3", name: "OnePlus", price: "$2,222.99" }
  ]

}
