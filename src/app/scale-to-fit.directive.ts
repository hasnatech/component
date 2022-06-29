import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[scaleToFit]'
})
export class ScaleToFitDirective implements AfterViewInit {

  @Input() width: any;
  @Input() maxwidth: any;

  element: any;
  wrapper: any;
  outer: any;
  constructor(private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngAfterViewInit(): void {
    //this.element.innerHTML = "<div class='wrapper'><div class='outer'>"+  this.element.innerHTML +"</div></div>"
    if (this.maxwidth) {
      this.element.style.maxWidth = this.maxwidth + 'px';
      this.element.style.margin = "0 auto";
    }
    this.element.style.position = 'relative';
    this.element.style.overflow = 'hidden';

    this.wrapper = this.element.querySelector('.wrapper') as HTMLDivElement;

    if (this.maxwidth != null) {
      this.wrapper.style.width = this.maxwidth + 'px';
    } else {
      this.wrapper.style.width = this.width + 'px';
    }
    // this.wrapper.style.backgroundColor = "blue";
    this.wrapper.style.position = 'relative';

    this.outer = this.element.querySelector('.outer') as HTMLDivElement;
    this.outer.style.position = 'relative';
    this.outer.style.transformOrigin = '0% 0%';
    this.outer.style.overflow = 'hidden';
    // this.outer.style.backgroundColor = "pink";
    this.resize();
    // console.log("this.wrapper", this.wrapper);
    // console.log("this.outer", this.outer);
  }

  @HostListener('window:resize', ['$event'])
  resize() {

    let maxWidth = this.outer.clientWidth,
      maxHeight = this.outer.clientHeight;


    let scale, width, height;
    if (this.maxwidth) {
      width = Math.min(this.maxwidth, window.innerWidth);
    } else {
      width = window.innerWidth;
    }
    height = window.innerHeight;

    scale = width / maxWidth;
    let scaleH = height / maxHeight;
    let diffW = (width - maxWidth) / 2;

    // console.log("scaleH", scale, scaleH)
    // scale = Math.min(scale, scaleH);
    // let paddingLeft = (diffW / scale) / 2;
    // this.outer.style.transform = 'scale(' + scale + ')';
    // this.wrapper.style.height = (maxHeight * scale) + "px";
    // this.element.style.paddingLeft = paddingLeft + "px";


    scale = Math.min(scale, scaleH);
    console.log(scale, scaleH);
    // let paddingLeft = (diffW / scale) / 2;
    this.outer.style.zoom =  scale;
    this.wrapper.style.width = this.width * scale +"px";
    this.element.style.display = 'flex';
    this.element.style.minHeight = "100vh";
    this.element.style.justifyContent = 'center';
    this.element.style.alignItems = 'center';

    // this.wrapper.style.height = (maxHeight * scale) + "px";
    // this.element.style.paddingLeft = paddingLeft + "px";
  }

}
