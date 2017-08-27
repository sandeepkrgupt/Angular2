import {Pipe, PipeTransform} from '@angular/core';
@Pipe({name:'areacircle'})  // casesensitive use decorator name in lowercase. name is predefined key we cannot other names.

export class AreaCircle implements PipeTransform{
	transform (r : number){		// transform is predefined abstract method inside PipeTransform interface.
		return 3.14*(r*r);
	}
}