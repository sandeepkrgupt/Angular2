import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent implements OnInit {
@Input() rate : String ;
  constructor() { }

  ngOnInit() {
  	console.log("This is child component apple and rate is - " + this.rate);
  }

}
