import { Component, OnInit } from '@angular/core';
import {triangleap} from '../services/triangle.service';
import {areaservice} from '../services/area.service';
import {pmeterservice} from '../services/perimeter.service';

@Component({
  selector: 'app-trianglecomp',
  templateUrl: './trianglecomp.component.html',
  styleUrls: ['./trianglecomp.component.css']
})
export class TrianglecompComponent implements OnInit {

	constructor(private tserv : triangleap, private area : areaservice, private pmeter : pmeterservice) { }

	ngOnInit() {
		var area = this.area.findarea(10,8,12);
		console.log(area);
		var pmeter = this.pmeter.findpmeter(10,8,12);
		console.log(pmeter);
	}
}