import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ManagementserviceService } from 'src/app/services/managementservice.service';

@Component({
  selector: 'app-buyer-list',
  templateUrl: './buyer-list.component.html',
  styleUrls: ['./buyer-list.component.css']
})
export class BuyerListComponent implements OnInit {

  products: Product[] = [];

  constructor(private service : ManagementserviceService) { }

  ngOnInit(): void {
    this.listOfProducts();
  }

  listOfProducts() {
    this.service.getAllProducts().subscribe(
      data => {
        console.log(data);
        this.products = data;
      }
    )
  }

}
