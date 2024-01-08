import { Component } from '@angular/core';
import { NumberToStringPipe } from './number-to-string.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ NumberToStringPipe ]
})
export class AppComponent {
  constructor(private numbertostringpipe: NumberToStringPipe) {}
  title = 'digitToWords';
  inputNumber!: number;
  outputWord!: string;
  convertToWord() {
    if (this.inputNumber >= 0 && this.inputNumber <= 1000000) {
      this.outputWord = this.numbertostringpipe.transform(this.inputNumber);
    } else {
      this.outputWord = 'Out of limit';
    }
  }
}
