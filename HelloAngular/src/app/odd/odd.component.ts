import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  @Input() emittedNumber: number = 0;

  constructor() { }

  ngOnInit() {
  }

  // GameControl
  handleNumberEmitted(number:number) {
    if (number % 2 != 0) {
      console.log(`Sono in odd.component > handleNumberEmitted() - Il numero ${number} è DISPARI`);
    }
  }

}
