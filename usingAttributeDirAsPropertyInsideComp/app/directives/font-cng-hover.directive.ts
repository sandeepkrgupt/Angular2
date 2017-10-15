import { Directive, OnInit, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appFontCngHover]'
})
export class FontCngHoverDirective implements OnInit{
constructor(private ele : ElementRef, private render : Renderer) {

   }

	ngOnInit(){
	  
	}

   @HostListener('mouseover') mouseover(){

   this.render.setElementStyle(this.ele.nativeElement,'font-size','18px');
   }

   @HostListener('mouseout') mouseout(){

   this.render.setElementStyle(this.ele.nativeElement,'font-size','12px');
   }

}
