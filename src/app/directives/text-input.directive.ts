import { twMerge } from 'tailwind-merge';
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[textInput]',
})
export class TextInputDirective implements OnInit {
  @Input('class') classes = '';

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.element.nativeElement.classList = twMerge(
      'text_size px-[1em] py-[0.8em] focus:outline-none',
      this.classes,
      '!border-[1px] border-black placeholder:text-black !rounded-[2px] focus:border-blue-400'
    );
  }
}
