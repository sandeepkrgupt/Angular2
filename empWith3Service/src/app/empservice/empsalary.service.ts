import {empSalDA} from './empDA.service';
import {empSalTA} from './empTA.service';

// Injectable is used for dependency injection when one service is dependent on another service.
import {Injectable} from '@angular/core';

// @ is used for decorators.
@Injectable() 

export class GrossSalary{
	constructor(private varda : empSalDA, private varta : empSalTA){

	}
	
	GetGrossSal(bs:number){
		var gross = this.varda.getDA(bs) + this.varta.getTA(bs) ;
		return gross;
	}
}