import {areaservice} from './area.service';
import {pmeterservice} from './perimeter.service';

// Injectable is used for dependency injection when one service is dependent on another service.
import {Injectable} from '@angular/core';
@Injectable() // @ is used for decorators.
export class triangleap{
	constructor(private afind : areaservice, private pmtrfind : pmeterservice){

	}

}

