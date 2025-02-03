import { Component } from '@angular/core';
import { CalculatorComponent } from './calculator.component';

@Component({
  selector: 'app-root',
  imports:[CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Calculater';
}
