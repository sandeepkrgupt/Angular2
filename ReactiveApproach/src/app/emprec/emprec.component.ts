import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-emprec',
  templateUrl: './emprec.component.html',
  styleUrls: ['./emprec.component.css']
})
export class EmprecComponent implements OnInit {
private empRec : FormGroup;
private emp : any[] = [{
	fn : 'sas',
	ln : 'aa',
	sal : 32432434
},{
	fn : 'sas',
	ln : 'aa',
	sal : 32432434
}];
  constructor() { }

  ngOnInit() {
  this.empRec = new FormGroup({
  fn : new FormControl (null),
  ln : new FormControl (null),
  sal : new FormControl (null)

  });
  }
  addrec(){
  console.log(this.empRec);
  var ans = this.emp.push({fn :this.empRec.value.fn,ln :this.empRec.value.ln,sal :this.empRec.value.sal});
  console.log(ans);
  console.log(this.empRec);
  return ans;

  }


}
