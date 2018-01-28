import { Component } from '@angular/core';
import { LoggingService } from './shared/logging.service';
import { IMessage } from "./shared/message.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // private title = 'Titolo'; // così questa proprietà non viene esposta al componente
  title = 'Titolo';
  hideMessage:boolean = true;
  showSuccessMessage: boolean = true;
  elements: number[] = [1,2,3,4,5,6];

  messages: Array<IMessage>;

  constructor(
    private loggingService: LoggingService
  ){
    // se uso function invece che => ho il problema del binding con this!
    setTimeout(() => {
      this.title = 'From timeout';
      this.hideMessage = false;
    }, 3000);

    this.loggingService.getMessages()
      .subscribe(
        (value: Array<IMessage>) => {
          this.messages = value;
        }
      );
  }

/*  handleMessage(msg: string){
    console.log("OK");
    console.log(msg);
  }*/

  handleMessage(value: boolean){
    this.showSuccessMessage = value;
  }

  handleButtonClick(value: boolean){
    this.showSuccessMessage = value;
  }

  viewDetails: boolean = true;
  log: Array<Date> = [];

  showHideMessage(){
    this.viewDetails = !this.viewDetails;
    //this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

  // GameControl
  handleNumberEmitted(number:number) {
    console.log(`Sono in app.component > handleNumberEmitted() - Il numero è ${number}`);
  }
}
