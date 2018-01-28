export interface ICard {
  id?: number; // così è opzionale
  registeredUsername: string;
  cardType: string;
  cardNumber: string;
  cardRegistered: Date;
  cardDeadline: Date;
  cardFunds: number;
}
