import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  colors = [
    '#000',
    '#52dbec',
    '#40750a',
    '#a4f59b',
    '#f5931f',
    '#29dc0f',
    '#3590e0',
    '#3e1ea9',
  ];

  @HostBinding('style.borderColor') private borderColor = 'black';
  @HostBinding('style.color') private color: any = 'black';
  
  @HostListener('keyup') onMouseLeave() {
    console.log(this.color, this.borderColor);
    const random = Math.floor(Math.random() * 8);
    this.color = this.colors[random];
    this.borderColor = this.color;
  }

  constructor() {
    console.error('hi');
  }
}
