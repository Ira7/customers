import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../providers/customer-service/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

Customers:any;

  constructor(private customersService: CustomersService) { 
    this.Customers = customersService.data;
  }

  ngOnInit() {
  }

}
