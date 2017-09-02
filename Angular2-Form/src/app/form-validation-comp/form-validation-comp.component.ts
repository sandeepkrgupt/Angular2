import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form-validation-comp',
  templateUrl: './form-validation-comp.component.html',
  styleUrls: ['./form-validation-comp.component.css']
})

export class FormValidationCompComponent implements OnInit {
@ViewChild('f') login : NgForm;
  constructor() { }

  ngOnInit() {
  }

  save(frm :NgForm){
  console.log(frm.value);
  }

    save2(){
   console.log(this.login);
  console.log(this.login.value);
  }

}
