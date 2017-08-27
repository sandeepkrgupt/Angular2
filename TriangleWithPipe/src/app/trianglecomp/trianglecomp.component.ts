import { Component, OnInit } from '@angular/core';
import {Triangle} from '../triangleservice/areapmeter.service'
import {perimeterService} from '../triangleservice/peerimeter.service'
@Component({
  selector: 'app-trianglecomp',
  templateUrl: './trianglecomp.component.html',
  styleUrls: ['./trianglecomp.component.css']
})
export class TrianglecompComponent implements OnInit {
 private x : number =10;
  constructor(private apcalc : Triangle) { }

  ngOnInit() {
   var findarea = this.apcalc.area(15,5,10);
   console.log('Area of Triangle is' + findarea);
   var findpmeter = this.apcalc.peremeter(15,5,10);
   console.log('peremeter of Triangle is' + findpmeter);
  }

}
