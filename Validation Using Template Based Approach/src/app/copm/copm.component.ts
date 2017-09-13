import { Component, OnInit } from '@angular/core';

import {ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-copm',
  templateUrl: './copm.component.html',
  styleUrls: ['./copm.component.css']
})
export class CopmComponent implements OnInit {
private newusr : any[] =[{
	fstname : 'ss',
	number : 9939439399,
	email : 'sad@g.in'
}];

@ViewChild('myFrm') ctc_dtl : NgForm;
  constructor() { }

  ngOnInit() {
  }

// Method
add(){
	console.log(this.ctc_dtl);
	var x = this.newusr.push({fstname : this.ctc_dtl.value.fstname, number : this.ctc_dtl.value.number, email : this.ctc_dtl.value.email});
	console.log(x);
	return x;
}
}
