import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() isActive: boolean = false;
  @Input() modalTitle: string;
  /*@Input() settings = {
    isActive: false,
    modalTitle: ''
  };*/
  @Output() onClose: EventEmitter<{}> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.onClose.emit();
  }

}
