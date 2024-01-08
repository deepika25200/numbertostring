import { Pipe, PipeTransform } from '@angular/core';
import * as numberToWords from 'number-to-words';

@Pipe({
  name: 'numberToString'
})
export class NumberToStringPipe implements PipeTransform {

  transform(value: number): string {
    if (value !== undefined && value !== null) {
      if (value === 0) {
          return "zero";
      } else {
          return numberToWords.toWords(value);
      }
  } else {
      return "";
  }
  }

}
