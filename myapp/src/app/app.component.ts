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

  private physics : string = "75";
  private chemistry : string = "80";
  private maths : string = "93";
  private hindi : string = "82";
  private english : string = "75";
  private avg : number;

average(){
  alert("hi")
  this.avg = (parseFloat(this.physics)+parseFloat(this.chemistry)+parseFloat(this.maths)+parseFloat(this.hindi)+parseFloat(this.english))/5;
}

}
