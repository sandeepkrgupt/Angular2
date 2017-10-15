import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-comp',
  templateUrl: './directive-comp.component.html',
  styleUrls: ['./directive-comp.component.css']
})
export class DirectiveCompComponent implements OnInit {
private mycol : String ='red';
  constructor() { }

  ngOnInit() {
  }

}
