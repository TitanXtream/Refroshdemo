import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

import { twMerge } from 'tailwind-merge';

@Directive({
  selector: '[squareButton]',
})
export class SquareButtonDirective implements OnInit {
  @Input('class') classList = '';
  @Input('color') backgroundColor: 'gray' | 'white' = 'gray';

  constructor(private element: ElementRef) {}

  ngOnInit() {
    const bgColor =
      this.backgroundColor === 'gray'
        ? '!bg-[#DADADA]  hover:opacity-[0.7]'
        : 'bg-[#E5E5EA]/30 hover:bg-[#E5E5EA]/70';

    this.element.nativeElement.classList = twMerge(
      'text_size px-[2em] py-[0.8em]',
      this.classList,
      `!border-[2px] !border-black ${bgColor} !font-bold`
    );
  }
}
