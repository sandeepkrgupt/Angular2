import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-comp',
  templateUrl: './search-comp.component.html',
  styleUrls: ['./search-comp.component.css']
})
export class SearchCompComponent implements OnInit {
private products : any [] = [{
	id:1,
	name:'Mango',
	cost:110
},{
	id:2,
	name:'Mango2',
	cost:110
},{
	id:3,
	name:'Mango3',
	cost:110
}];
private key : string ='';
  constructor() { }

  ngOnInit() {
  }

}
