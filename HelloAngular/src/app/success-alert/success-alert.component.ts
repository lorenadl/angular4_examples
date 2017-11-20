import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LoggingService } from "../shared/logging.service";

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
  //providers: [LoggingService] // Spostato in app.module
})
export class SuccessAlertComponent implements OnInit {
  @Input() successMessage: string = "Questo è il messaggio di successo di default.";
  //@Output() onMessage: EventEmitter<string> = new EventEmitter();
  @Output() onMessage: EventEmitter<boolean> = new EventEmitter();
  @Input() showMessage: boolean = false; // a seconda di questo input gli metto un display none al paragrafo

 /*
 private ls: LoggingService;
  constructor(
    ls: LoggingService
  ) {
    this.ls = ls
  }*/

  // Questo qua sotto è uno shortcut di TypeScript per quanto scritto qua sopra come constructor
  constructor(
    private loggingService: LoggingService
  ) { }

  ngOnInit() {
    this.loggingService.logMessageArray("Questa è una stringa di prova")
      .subscribe(
        (value: number) => {
          console.log(value);
        }
      );
  }

  // NON mettere come statico, altrimenti non funziona!
  sendMessage() {
    // Così funziona, ma così creo una nuova istanza del service per questo componente, ciò significa
    // che NON sto condividendo i dati.
    // Io voglio far sì che creo il service una volta e poi i diversi componenti che lo usano aggiornano i suoi dati.
    // Per far questo devo usare la dependency injection, e istanziare il service nel constructor
    //const log = new LoggingService();
    //log.logMessage("prova");

    this.loggingService.logMessage("Così è corretto!");

    // Spostato in ngOnInit per usare gli Observable
    //this.loggingService.logMessageArray("Questa è una stringa di prova");

    console.log("Send a message");
    //this.onMessage.emit("A value from inside");

    const randomNumber: number = Math.floor(Math.random() * 1000) + 1; // genero un numero casuale
    const value: boolean = randomNumber % 2 === 0 ? true : false; // vede se è pari o dispari
    console.log("Pari? " + value);
    this.onMessage.emit(value);
  }

}
