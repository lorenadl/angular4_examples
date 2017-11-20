import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  @Input() emittedNumber: number = 0;

  constructor() { }

  ngOnInit() {
  }

  // GameControl
  handleNumberEmitted(number:number) {
    if (number % 2 === 0) {
      console.log(`Sono in even.component > handleNumberEmitted() - Il numero ${number} è PARI`);
    }
  }
}
