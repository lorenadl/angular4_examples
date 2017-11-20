import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  template: `<button type="" (click)="handleClick()">Vsualizza dettagli</button>`
})
export class CounterButtonComponent implements OnInit {
  @Output() onClick: EventEmitter<{title: string}> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.onClick.emit();
  }

}
