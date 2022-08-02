import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/common/category';
import { ManagementserviceService } from 'src/app/services/managementservice.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {

  categories: Category[] = [];

  constructor(private service : ManagementserviceService) { }

  ngOnInit(): void {
  this.listOfCategory();

  }

  listOfCategory() {

      this.service.getAllCategories().subscribe(
        data => {
          console.log(data);
          this.categories = data
        }

      )

  }



}
