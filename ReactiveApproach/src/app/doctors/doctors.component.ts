import { Component, OnInit } from '@angular/core';


import {FormGroup, FormControl} from '@angular/forms';
@Component({ 
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

private docrec : FormGroup;
private Doc : any [] = [{
	DId : 1,
	DNm : 'sa',
	DSal : 343242,
	DSpec : 'dsds'

},{
	DId : 2,
	DNm : 'sasss',
	DSal : 32323,
	DSpec : 'ww'

}];
  constructor() { }

  ngOnInit() {
  this.docrec = new FormGroup({
  DId : new FormControl(null),
  DNm : new FormControl (null),
  DSal : new FormControl (null),
  DSpec : new FormControl (null)
  });

  }

  recadd(){
  console.log(this.docrec);
  var x = this.Doc.push({Did : this.docrec.value.DId,DNm : this.docrec.value.DNm, DSal : this.docrec.value.DSal, DSpec : this.docrec.value.Spec});
  return x;
  }

}
