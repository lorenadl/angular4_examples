import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import { environment } from '../../environments/environment';
import {ICustomerResponse, ICustomers} from "./models/customer.model";

@Injectable()
export class CustomersService {

  constructor(private http: HttpClient) { }

  retrieve(cid: string): Observable<ICustomerResponse> {
    return this.http.get<ICustomerResponse>(`${environment.apiHost}/customers/${cid}`);
  }

  index(): Observable<ICustomers> {
    return this.http.get<ICustomers>(`${environment.apiHost}/customers`);
  }

  create(payload): Observable<any> {
    return this.http.post(`${environment.apiHost}/customers`, payload);
  }
}
