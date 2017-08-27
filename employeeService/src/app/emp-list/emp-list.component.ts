import { Component, OnInit } from '@angular/core';
import {empSalary} from '../addgetempService/addgetEmp.service'
@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  constructor(private manageemp : empSalary) { }

  ngOnInit() {
  	var getgross = this.manageemp.getgross(1000);
  	console.log('gross sal is' + getgross);
  	var getda = this.manageemp.getda(1000);
  	console.log('getda emp is' + getda);
  	var getta = this.manageemp.getta(1000);
  	console.log('getta' + getta);
  	var gethra = this.manageemp.gethra(10000);
  	console.log('gethra' + gethra);
  }

}
