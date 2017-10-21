import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
private str : String ;
private strlemon : String;
private num : Number =10;
  constructor() { }

  ngOnInit() {
  this.str = 'this is rate of Apple coming from parent component - 200';
  this.strlemon = "this is rate of Lemon coming from parent component - 155";
  //console.log("rate is" + this.rate);
  }

}
