import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekcomp',
  templateUrl: './weekcomp.component.html',
  styleUrls: ['./weekcomp.component.css']
})
export class WeekcompComponent implements OnInit {
private n : number = 1;
private x : number = 3;
private noofchar : string = 'John';
  constructor() { }

  ngOnInit() {
  }

}
