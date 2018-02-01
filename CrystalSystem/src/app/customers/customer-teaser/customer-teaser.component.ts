import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-customer-teaser',
  templateUrl: './customer-teaser.component.html',
  styleUrls: ['./customer-teaser.component.css']
})
export class CustomerTeaserComponent implements OnInit {

  @Input() settings;
  constructor() { }

  ngOnInit() {
  }

}
