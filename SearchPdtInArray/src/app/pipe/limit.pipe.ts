import {Pipe, PipeTransform} from '@angular/core';
@Pipe({name : 'limit'})

export class LimitPipe implements PipeTransform{
	transform(products : any[] , l1 :number){
		var newLimitArr = [];
		for(var i=0; i<l1;i++){
			newLimitArr.push(products[i]);
		}
		return newLimitArr;
	}
}