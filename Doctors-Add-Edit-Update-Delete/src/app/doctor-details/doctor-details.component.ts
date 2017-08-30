import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
	private doctorEntry : any = {};
	private doctorList : any [] = [{
		doc_id : 1,
		doc_name :'Dr. Aman',
		doc_spec : 'Eye Spec',
		doc_sal : 224234
	},{
		doc_id : 2,
		doc_name :'Dr. Reyan',
		doc_spec : 'Eye Spec',
		doc_sal : 565465
	},{
		doc_id : 3,
		doc_name :'Dr. Yash Priya',
		doc_spec : 'Heart Spec',
		doc_sal : 354545545
	}];

	addNewDoc(){
		this.doctorList.push(this.doctorEntry);
		this.doctorEntry = {};
	}
	editDoc(x : any){
		this.doctorEntry = x;
	}
	updateDoc(){
		for(let i=0; i<this.doctorList.length; i++){
			if(this.doctorEntry.doc_id == this.doctorList[i].doc_id){
				this.doctorList[i] = this.doctorEntry ;
				this.doctorEntry = {};
			}
		}
	}
	deleteDoc(x : any){
	let i;
		for(let i=0; i<this.doctorList.length; i++){
			if(this.doctorList[i].doc_id == x.doc_id){
				this.doctorList.splice(i,1);
			}
		}
	}
  constructor() { }
  ngOnInit() {
 
  }

}
