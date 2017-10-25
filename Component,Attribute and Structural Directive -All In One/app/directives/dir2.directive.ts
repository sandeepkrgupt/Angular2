import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appDir2]'
})
export class Dir2Directive {

constructor(private temref : TemplateRef<any>, private vwref : ViewContainerRef) { }
	@Input('appDir2') set zzz(n : Number){
		for(let i = 0; i<n; i++){
			this.vwref.createEmbeddedView(this.temref)
		}
	}
}
