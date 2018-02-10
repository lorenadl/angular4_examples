import {ICustomerResponse} from "../models/customer.model";
//import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {CustomersService} from "../customers.service";

@Injectable()
export class CustomerRetrieveResolve implements Resolve<ICustomerResponse> {
  constructor(private customerService: CustomersService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<ICustomerResponse> | Promise<ICustomerResponse> | ICustomerResponse {

    return this.customerService.retrieve(route.params['cid']);
  /*  console.log(route);
    console.log(state);
    return true;*/

  }
}
