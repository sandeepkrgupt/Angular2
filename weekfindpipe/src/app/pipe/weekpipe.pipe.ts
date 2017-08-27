import {Pipe, PipeTransform} from '@angular/core';
@Pipe({name : 'week'})


export class WeekFind implements PipeTransform{
	transform(x : number){
	console.log(x);
	var a ="";
	 switch(x){
	 case 1:
	 a= 'Mon';
	 break;
	 case 2: 
	 a='Tue';
	 break;
	 case 3:
	 a= 'Wed';
	 break;
	 case 4: 
	 a='Thr';
	 break;
	 }
	 return a;
	}
}