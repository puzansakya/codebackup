import { CustomerService } from './customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers = [];
  columns = [];
  title;
  constructor(public customerService: CustomerService) {
    this.title = "Customer List."
  }

  ngOnInit() {
    this.columns = [
      { prop: 'ID' },
      { name: 'Firstname' },
      { name: 'Lastname' },
      { name: 'Age' }
    ];
    this.customerService.getCustomers().subscribe(data => this.customers = data.json());
  }

}
