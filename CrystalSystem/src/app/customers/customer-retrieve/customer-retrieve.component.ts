import { Component, OnInit } from '@angular/core';
//import {ActivatedRoute, Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";
//import {CustomersService} from "../customers.service";

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import {ICustomer, ICustomerResponse} from "../models/customer.model";

@Component({
  selector: 'app-customer-retrieve',
  templateUrl: './customer-retrieve.component.html',
  styleUrls: ['./customer-retrieve.component.css']
})
export class CustomerRetrieveComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    //private router: Router,
    //private customersService: CustomersService
  ) { }

  customer: ICustomer;

  ngOnInit() {
    // NO RESOLVE
    // this.route.params
    //   .switchMap((params) => this.customersService.retrieve(params.cid))
    //   /*.map((customer) => customer.values.firstName + ' ' + customer.values.lastName) */
    //   .subscribe(
    //     (customer: ICustomerResponse) => {
    //       console.log(customer);
    //       this.customer = customer.values;
    //     },
    //     (error) => {
    //       console.log(error);
    //       this.router.navigate(['/customers']);
    //     }
    //   )

    this.customer = (<ICustomerResponse>this.route.snapshot.data['customer']).values;
  }

}
