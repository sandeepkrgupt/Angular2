import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent implements OnInit {

private userSignup : FormGroup;
  constructor() { }

  ngOnInit() {
  this.userSignup = new FormGroup({
  unm : new FormControl(null, [Validators.required, Validators.pattern('[A-Za-z]{5}')]),

  uem : new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern('/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/')]),

  uctc : new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern('^(0|[1-9][0-9]*)$')]),

  uaddr : new FormControl(null, [Validators.required, Validators.maxLength(500)]),
  })
  }
checklogin(){
	console.log(this.userSignup)
}
}
