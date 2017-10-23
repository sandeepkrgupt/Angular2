import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appLoopDir]'
})
export class LoopDirDirective {

  constructor(private tem : TemplateRef<any>, private container : ViewContainerRef) { }
  // TemplateRef<any> - is called type casting.
//A generic type is a generic class or interface that is parameterized over types. Here TemplateRef is generic type.
//So we need to define its type.

@Input('appLoopDir') set check(n : Number){
	for(let i=1; i<=n ; i++){
	this.container.createEmbeddedView(this.tem);
	}
}
}
