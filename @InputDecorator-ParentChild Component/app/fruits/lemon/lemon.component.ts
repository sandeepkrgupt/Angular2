import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-lemon',
  templateUrl: './lemon.component.html',
  styleUrls: ['./lemon.component.css']
})
export class LemonComponent implements OnInit {
@Input() lemonrate : String;
  constructor() { }

  ngOnInit() {
  	console.log("This is child component lemon -" + this.lemonrate);
  }

}
