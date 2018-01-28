import {Injectable} from "@angular/core";
import { ICard } from '../model/card.model';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/take';

@Injectable()   // metterlo sempre anche se non ci serve -- serve per iniettare qualcosa all'interno di questo service
export class CardsService {
  private cards: ICard[] = [
    {
      id: 1,
      registeredUsername: 'Pippo Pluto',
      cardType: 'amex',
      cardNumber: '1234567890',
      cardRegistered: new Date(),
      cardDeadline: new Date(),
      cardFunds: 1500
    },
    {
      id: 2,
      registeredUsername: 'Pippo Pluto',
      cardType: 'visa',
      cardNumber: '1234567890',
      cardRegistered: new Date(),
      cardDeadline: new Date(),
      cardFunds: 10
    }
  ];

  // mi serve questo metodo perchè ho messo l'array private
/*  getCards() {
    return this.cards.slice(); // ritorna una copia dell'array (meglio ternersi l'originale buono)
  }*/

  // alternativa con observable.
  // Non restituisco un array (usando: Observable<ICard[]>) ma un singolo elemento (Observable<ICard>)
  // perchè emetto un elemento alla volta.
/*  getCards(): Observable<ICard> {
    return Observable.from(this.cards)
  }*/

  // così colleziono tutti gli elementi in un array
  getCards(): Observable<ICard[]> {
    return Observable.from(this.cards)
      .take(2)  // qui posso fare delle elaborazioni, ad esempio così prendo solo 2 elementi
      .toArray(); // qui trasformo il tutto in un array
  }

  addFunds(id: number, newFunds: number) {
    // devo recuperare l'elemento dell'array che ha l'id passato e impostare il nuovo valore
    // invece che usare un for, potrei usare un observable
    // Se faccio nel backend: faccio un put/patch, e quando mi ritorna la risposta contiene
    // l'oggetto intero aggiornato e lo aggiorno qui.
    for (let i in this.cards) { // i è l'indice, non l'elemento
      if (this.cards[i].id == id) {
        this.cards[i].cardFunds += newFunds;
        break; // esce dal ciclo
      }
    }
    return this.getCards(); // ritorno l'intero array perchè voglio aggiornare tutto
  }

  addCard(card: ICard){
    this.cards.push(card);
    return this.getCards();
  }
}

// Ora si può sostituire questo array fisso di card con una lettura da un server esterno.
// Poi bisogna modificare dove leggiamo i dati perchè vanno usati gli observable,
// e il dato verrà assegnato alla variabile quando arriverà la risposta (quindi si aggiunge un subscribe
// e poi l'assegnazione va fatta all'interno del subscribe)

// Se utilizziamo questo service anche come interscambio dei dati delle card, ci possiamo togliere di mezzo tutti
// gli output - vanno usati gli observable
