import { Component, Input, OnInit } from '@angular/core';
import {LoggingService} from "../shared/logging.service";

@Component({
  selector: 'app-warning-alert',
  //template: `<p class="alert-text" hidden>{{ alertMessage }}</p>`, // hidden è proprietà html5

  // con le [] diventa un property binding
  template: `<p class="alert-text" [hidden]="isHidden" [style.color]="redColor">{{ alertMessage }}</p>`,
  styles: [`
    p {
      background-color: red;
      color: white;
    }
  `]
})
export class WarningAlertComponent implements OnInit {
  @Input() isHidden: boolean = true;
  @Input() alertMessage: string = 'This is a warning!!!!'; // di default è public, che significa che viene vista dal template

  constructor(private loggingService: LoggingService) {}
  ngOnInit(){
    this.loggingService.logMessageArray("Questa è una stringa di prova")
      .subscribe(
        (value: number) => {
          console.log(value);
        }
      );
  }
}
