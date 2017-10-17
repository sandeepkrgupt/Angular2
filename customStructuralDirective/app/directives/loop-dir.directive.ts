import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appLoopDir]'
})
export class LoopDirDirective {

  constructor(private tem : TemplateRef<any>, private container : ViewContainerRef) { }
  // TemplateRef<any> - is called type casting.

@Input('appLoopDir') set check(n : Number){
	
	for(let i=1; i<=n ; i++){
	this.container.createEmbeddedView(this.tem);
	}
}
}
