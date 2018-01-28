import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-add-funds',
  templateUrl: './add-funds.component.html',
  styleUrls: ['./add-funds.component.css']
})
export class AddFundsComponent implements OnInit {
  // @ViewChild cerca un elemento nella view chiamato 'funds'. inputFunds è un riferimento all'elemento
  // Serve se devo fare ad esempio una direttiva per modificare l'html.
  @ViewChild('funds') inputFunds: ElementRef;

  // Per esporre il valore letto dall'input nel modale
  @Output() onAddFunds: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // Il tipo può essere HTMLInputElement o HTMLElement se non è un input
  // con HTMLInputElement ho funds.value, se no no.
  // qui passo l'elemento dalla view
/*  onClick(funds: HTMLInputElement) {
    console.log(funds.value);
  }*/

  // mi recupero l'elemento del DOM dal controller
  // non serve passare l'elemento dalla view, lo recupero con il decorator @ViewChild
  onClick() {
   const value= this.inputFunds.nativeElement.value;
   // qui devo mettere il + per convertire value, che è una stringa, in numero.s
   this.onAddFunds.emit(+value);
  }
}
