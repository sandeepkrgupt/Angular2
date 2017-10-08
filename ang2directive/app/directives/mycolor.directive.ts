// This is Attribute Directive

import {Directive, ElementRef,Renderer,HostListener} from '@angular/core';
@Directive({selector :'[mycolor]'})

export class MyColor {
	constructor (private ele : ElementRef, private render : Renderer){

	}
	@HostListener('mouseover') mouseover(){
			console.log('mouse over');
			this.render.setElementStyle(this.ele.nativeElement, 'color', 'red')
	}
	@HostListener('mouseout') mouseout(){
	console.log('mouse out')
	this.render.setElementStyle(this.ele.nativeElement, 'color', 'green')
	}

}