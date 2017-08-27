import { Component, OnInit } from '@angular/core';

// calling new services
import {GrossSalary} from '../empservice/empsalary.service';
//import {empSalDA} from '../empservice/empDA.service';
//import {empSalTA} from '../empservice/empTA.service'


@Component({
  selector: 'app-emp-sal-management',
  templateUrl: './emp-sal-management.component.html',
  styleUrls: ['./emp-sal-management.component.css']
})
export class EmpSalManagementComponent implements OnInit {

  constructor(private grossvar : GrossSalary, ) { }  //private davar : empSalDA, private tavar : empSalTA

  ngOnInit() {
  	var empgross = this.grossvar.GetGrossSal(250000);
  	console.log("gross sal is " + empgross);
  	alert("gross sal is " + empgross);
  	/*var empTa = this.davar.getDA(250000);
  	console.log("emp TA is " + empTa);
  	alert("emp TA is " + empTa);
  	var empDa = this.tavar.getTA(250000);
  	console.log("empDA is " + empDa);
  	alert("empDA is " + empDa);*/
  }

}
