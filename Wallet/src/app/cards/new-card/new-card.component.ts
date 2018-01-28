import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ICard} from "../../model/card.model";


@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css']
})
export class NewCardComponent implements OnInit {
  months: string[] = [
    'GEN', 'FEB', 'MAR', 'APR', 'MAG', 'GIU', 'LUG', 'AGO', 'SET', 'OTT', 'NOV', 'DIC'
  ];
  @Output() onNewCard: EventEmitter<ICard> = new EventEmitter(); // usato dentro addNewCard, per trasmettere l'evento all'esterno
  @ViewChild('f') form: NgForm; // in alternativa a passare f come argomento di addNewCard

  constructor() { }

  ngOnInit() {
  }

  addNewCard() {
    //console.log(this.form);
    if (this.form.valid) {
      const values = this.form.value;
      //console.log(values);
      const payload: ICard = {
        //id: 0, // non ci serve più perchè in card.model l'ho messo come opzionale - è giusto così, non devo passarlo
        registeredUsername: `${values.firstname} ${values.lastname}`,
        cardType: values.cardtype,
        cardRegistered: new Date(),
        cardDeadline: new Date(values.year, values.month),
        cardNumber: values.cardnumber,
        cardFunds: 0
      }
      //console.log(payload);
      this.onNewCard.emit(payload);
    }
  }
}
