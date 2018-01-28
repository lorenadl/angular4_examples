import { Injectable} from "@angular/core";
//import { Http } from '@angular/http';
import {HttpClient} from "@angular/common/http";
import { StringService } from "./string.service";
import { Observable} from "rxjs/Observable";

import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import {IMessage} from "./message.model";


@Injectable()
export class LoggingService {
  constructor(
    private stringService: StringService,
    //private http: Http
    private http: HttpClient
  ) {}

  data = {
    name: 'Pippo',
    msg : ''
  }


  logMessage(msg: string) {
    console.log(`Send a message ${msg}`);
    this.data.msg = msg;
  }

/*  logMessageArray(msg: string): Observable<string> {
    const values = this.stringService.mySlit(msg, ' ');

    // Attenzione: devo importare l'operatore from (vedi sopra)
    return Observable.from(values);
  }*/

  logMessageArray(msg: string): Observable<number> {
    const values = this.stringService.mySplit(msg, ' ');

    // Attenzione: devo importare l'operatore from (vedi sopra)
/*    return Observable.from(values)
      .map((value: string) => {
        return value.length;
      });*/

    return Observable.from(values)
      .map((value: string) => value.length);
  }

/* // Con Http
  getMessages(): Observable<Array<IMessage>> {
    return this.http.get('http://localhost:3002/messages')
      .map((value) => value.json());
  }*/

  // Con HttpClient
  // occhio che ritorna un oggetto diverso (prima era un Obseravable di un Response)
  getMessages(): Observable<Array<IMessage>> {
    return this.http.get<Array<IMessage>>('http://localhost:3002/messages');
      //.map((value) => value.json()); // non serve più con HttpClient
  }

}
