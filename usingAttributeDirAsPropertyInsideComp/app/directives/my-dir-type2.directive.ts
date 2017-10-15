import { Directive,ElementRef, Renderer, OnInit, Input , HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDirType2]'
})
export class MyDirType2Directive implements OnInit{
@Input() appMyDirType2 : String;
  constructor(private el : ElementRef, private rendr : Renderer) { }

  ngOnInit(){

  console.log('color is'+ this.appMyDirType2);
 this.rendr.setElementStyle(this.el.nativeElement,'color',this.appMyDirType2.valueOf())
  }

  @HostListener('mouseover') mouseover(){

  this.rendr.setElementStyle(this.el.nativeElement,'font-weight','bold')
  console.log(this.el.nativeElement)
  }

  @HostListener('mouseout') mouseout(){
  this.rendr.setElementStyle(this.el.nativeElement,'font-weight','normal')
  }

}

