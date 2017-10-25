import { Directive, ElementRef, Renderer, HostListener} from '@angular/core';

@Directive({
  selector: '[appDir1]'
})
export class Dir1Directive {
constructor(private eleref : ElementRef, private rdr : Renderer) { }
	@HostListener('click',['$event']) click(ev : Event){
		//window.alert("click event");
		this.rdr.setElementStyle(this.eleref.nativeElement,'color','red');
	}
	@HostListener('dblclick') clickagain(){
		//window.alert("double click event");
		this.rdr.setElementStyle(this.eleref.nativeElement,'color','green');
	}
}
