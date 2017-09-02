import {Pipe, PipeTransform} from '@angular/core';
@Pipe({name : 'search', pure:false})  

export class SearchPdt implements PipeTransform{
	transform(products : any[] , key :string){
		var newArr = [];
		for(var i=0; i<products.length;i++){
			if(products[i].name == key){
				newArr.push(products[i]);
			}
		}
		return newArr;
	}
}