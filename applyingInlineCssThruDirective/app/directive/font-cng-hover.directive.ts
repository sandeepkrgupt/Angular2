import { Directive, OnInit, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appFontCngHover]'
})
export class FontCngHoverDirective implements OnInit{
constructor(private ele : ElementRef, private render : Renderer) {

   }

	ngOnInit(){
	 // console.log(this.appFontCngHover);
	}

   @HostListener('mouseover') mouseover(){

   this.render.setElementStyle(this.ele.nativeElement,'font-weight','bold');
   }

   @HostListener('mouseout') mouseout(){

   this.render.setElementStyle(this.ele.nativeElement,'font-weight','normal');
   }

}
