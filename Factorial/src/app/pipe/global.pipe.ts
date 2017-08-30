import {Pipe, PipeTransform} from '@angular/core';
@Pipe({name : 'factorial'})

export class NoFactorial implements PipeTransform {
	transform(x : number){
	var a =1;
		for(var i = 1 ; i<=x; i++){
			a = i*a;
		}
		return a;
	}
}
