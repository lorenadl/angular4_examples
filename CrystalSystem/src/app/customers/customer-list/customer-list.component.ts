import { Component, OnInit } from '@angular/core';
//import {CustomersService} from "../customers.service";
import {ICustomers, ICustomerTeaser} from "../models/customer.model";
import {ActivatedRoute, Data} from "@angular/router";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  //constructor(private customersService: CustomersService) { }
  constructor(private route: ActivatedRoute) { }

  customers: ICustomerTeaser[] = []; // trick per non avere errori quando carica la pagina

  ngOnInit() {
    // NO RESOLVE
/*    this.customersService.index()
      .subscribe(
        (response: ICustomers) => {
          this.customers = response.values;
        }
      )*/

    // RESOLVE SNAPSHOT
    // OK se ricarico la pagina ogni volta, o se la pagina contiene solo la lista dei customers
    //this.customers = (<ICustomers>this.route.snapshot.data['customers']).values

    // RESOLVE SUBSCRIPTION
    // Utile se la lista dei customers è una parte della pagina e deve essere rinfrescata in seguito ad azioni nella stessa pagina
    this.route.data
      .subscribe(
        (data: Data) => {
          this.customers = (<ICustomers>data['customers']).values;
          //console.log(data);
        }
      )
  }

}
