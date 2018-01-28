import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ICard } from '../../model/card.model';
import {ICardAction} from "../card-action.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() settings: ICard;
  @Output() onAction: EventEmitter<ICardAction> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  handleCardAction(actionType: number) {
    //this.onAction.emit({action: actionType, id: this.settings.id});
    this.onAction.emit({action: actionType, id: this.settings.id});
  }
}
