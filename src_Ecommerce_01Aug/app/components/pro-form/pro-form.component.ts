import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ManagementserviceService } from 'src/app/services/managementservice.service';

@Component({
  selector: 'app-pro-form',
  templateUrl: './pro-form.component.html',
  styleUrls: ['./pro-form.component.css']
})
export class ProFormComponent implements OnInit {
  formModel : Product = new Product(0,"","",0,"",0,0,0);
  constructor(private service : ManagementserviceService, private route : Router) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.service.saveProduct(this.formModel).subscribe(()=>{
      this.route.navigateByUrl("/products")
    })
  }
}


// export class EmpFormComponent implements OnInit {
//   formModel: Employee = new Employee(0,"","",new Date(),0,0,"",0); 

//   constructor(private service : ManagementServiceService,private route : Router) { }

//   ngOnInit(): void {
//   }

//   onSubmit(){
//     this.service.saveEmployee(this.formModel).subscribe(()=>{
//       this.route.navigateByUrl("/employees")
//     })
//   }
// }
