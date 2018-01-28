import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  detailsShown: boolean = false;
  logMessages: string[] = [];
  @Output() onClick: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleDetails() {
    var message: string = "";

    this.detailsShown = !this.detailsShown;
    message = new Date() + " Ho impostato visibilità a " + this.detailsShown;

    this.logMessages.push(message);
    console.log(message);

    this.onClick.emit(this.detailsShown);
  }
}
