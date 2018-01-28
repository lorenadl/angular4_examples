import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  viewDetails: boolean = true;
  log: Array<Date> = [];

  showHideMessage(){
    this.viewDetails = !this.viewDetails;
    //this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

  constructor() { }

  ngOnInit() {
  }



}
