import {Pipe, PipeTransform} from '@angular/core';
@Pipe({name : 'countchar'})


export class CountNameChar implements PipeTransform{
	transform(x : string){
	console.log(x.length);
	return x.length;
}
}