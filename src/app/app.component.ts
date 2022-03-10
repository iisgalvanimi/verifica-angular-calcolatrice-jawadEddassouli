import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Empty-Project';

  public num1:number = 0;
  public num2:number = 0;
  public risultato:number = 0;

  div(){
    this.risultato = this.num1 / this.num2
  }
  per(){
    this.risultato = this.num1 * this.num2
  }
  sum(){
    this.risultato = this.num1 + this.num2
  }
  sot(){
    this.risultato = this.num1 - this.num2
  }
}
