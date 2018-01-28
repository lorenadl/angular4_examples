import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardNumber'
})
export class CardNumberPipe implements PipeTransform {

  transform(value: string): string {
/*    if (value.length > 4) {
      return `**** **** **** ${value.slice(-4)}`;
    } else {
      return value;
    }*/

    return value.length > 4 ? `**** **** **** ${value.slice(-4)}` : value;

  }

}
