import { Component, OnInit } from '@angular/core';
import { ICard } from '../model/card.model';
import { ICardAction } from "./card-action.model";
import { CardsService } from "./cards.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards: ICard[] = [];
  addFundsShow: boolean = false;  // per aprire un modale con input per valore da aggiungere
  addNewCardShow: boolean = false; // per aprire un modale con form per nuova carta
  private cardId: number;

  constructor(
    private cardsService: CardsService // Importantissimo definire il tipo!
  ) { }

  // Per recuperare i dati dal service, potrei farlo all'interno del costruttore, ma i dati potrebbero non esserci ancora.
  // Meglio farlo nell'ngOnInit
  ngOnInit() {
    // senza observanle
    //this.cards = this.cardsService.getCards();

    // usando observable in cards.service per getCards (senza collezione in array)
 /*   this.cardsService.getCards()
      .subscribe(
        (data: ICard) => {
          this.cards.push(data);
        }
      );*/

    // usando l'array nel service
    this.cardsService.getCards()
      .subscribe(
        (data: ICard[]) => {
          this.cards = data;
        }
      );
  }

  cardAction(value: ICardAction) {
    switch (value.action) {
      // aggiungi fondi
      case 1:
        this.addFundsShow = true;
        this.cardId = value.id; // mi memorizzo l'id della card per poterlo recuperare in addFunds ad esempio
        // in alternativa posso fare un altro service e iniettarlo dentro cardService per recuperare i dati
        break;

      // paga
      case 2:
        break;

      // elimina carta
      case 3:
        break;
    }

  }

  addFunds(value: number) {
    // chiudo il modale
    this.addFundsShow = false;
    //console.log(value);
    // devo aggiornare il valore della card

    // se uso observable devo cambiare questa riga
    // this.cards = this.cardsService.addFunds(this.cardId, value);
  }

  // Apre un modale con un form per creare una nuova carta
  handleNewCard() {
    // se uso observable devo cambiare questa riga
    //observable this.addNewCardShow = true;
  }

  // risponde al clic sul bottone di submit del form, evento scatenato da new-card.component
  newCard(card: ICard) {
    this.addNewCardShow = false;
    // se uso observable devo cambiare questa riga
    //observable this.cards = this.cardsService.addCard(card);
  }

}
