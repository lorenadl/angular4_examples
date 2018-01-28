import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { BulmaModule } from './bulma/bulma.module';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './cards/card/card.component';
import { CardVendorImageComponent } from './cards/card-vendor-image/card-vendor-image.component';
import { CardNumberPipe } from './cards/card-number.pipe';
import { AddFundsComponent } from './cards/add-funds/add-funds.component';
import {CardsService} from "./cards/cards.service";
import { NewCardComponent } from './cards/new-card/new-card.component';


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardComponent,
    CardVendorImageComponent,
    CardNumberPipe,
    AddFundsComponent,
    NewCardComponent
  ],
  imports: [
    BrowserModule,
    BulmaModule,
    FormsModule
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
