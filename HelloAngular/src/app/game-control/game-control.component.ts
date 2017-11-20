import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  mySetInterval;
  @Output() onNumberEmitted: EventEmitter<number> = new EventEmitter();
  @Input() messaggeInInput: string="Non ho ancora letto niente";

  counter: number = 0;

  constructor() { }

  ngOnInit() {
  }


  doStart() {

    console.log("Sono in start");
    console.log(this.messaggeInInput);

    this.mySetInterval = setInterval(() => {
      console.log(`conto ${this.counter}`);
      this.onNumberEmitted.emit(this.counter );
      this.counter++;

    }, 1000);

  }

  doStop() {
    console.log("Sono in stop");
    clearInterval(this.mySetInterval);
  }
}
