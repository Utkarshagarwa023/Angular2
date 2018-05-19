import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private a : string = "10";
  private b : string = "20";
  private c: number;
  private e : string = "Hello world";

  add(){
    alert("HI")
    this.c = parseInt(this.a)+parseInt(this.b);
  }
}
