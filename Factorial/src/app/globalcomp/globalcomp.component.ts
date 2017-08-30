import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-globalcomp',
  templateUrl: './globalcomp.component.html',
  styleUrls: ['./globalcomp.component.css']
})
export class GlobalcompComponent implements OnInit {
private factno : number = 5;
  constructor() { }

  ngOnInit() {
  }

}
