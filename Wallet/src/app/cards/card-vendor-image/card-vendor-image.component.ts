import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-vendor-image',
  templateUrl: './card-vendor-image.component.html',
  styleUrls: ['./card-vendor-image.component.css']
})
export class CardVendorImageComponent implements OnInit {
  @Input() type: string;
  constructor() { }

  ngOnInit() {
  }

}
