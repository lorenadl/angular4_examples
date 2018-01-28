import { Component } from '@angular/core';

@Component({
  selector: 'app-message',                  // il tag html da utilizzare. Usare sempre il prefisso 'app-'
  templateUrl: './message.component.html',  // il template da utilizzare
  styleUrls: ['./message.component.css']    // foglio di stile, specifico e limitato al componente
})
export class MessageComponent {
}
