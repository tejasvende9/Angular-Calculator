import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-calculator',
  imports :[CommonModule,FormsModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  result: string = '';

  clrTextBox() {
    this.result = '';
  }

  clearLastCharacter() {
    this.result = this.result.slice(0, -1);
  }

  catchDigit(value: string) {
    this.result += value;
  }

  appendToResult(value: string) {
    this.result += value;
  }

  showResult() {
    this.calculate();
  }

  calculate() {
    console.log("Calculate method called");
    try {
      // Validate and evaluate the expression safely
      this.result = evaluate(this.result).toString();
    } catch (e) {
      this.result = 'Error';
    }
  }
}
