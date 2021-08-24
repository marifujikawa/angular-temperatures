import {
  Directive,
  ElementRef,
  HostListener,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[mask-float]',
})
export class MaskFloatDirective implements OnChanges {
  public input: HTMLInputElement;

  constructor(private hostElement: ElementRef) {
    this.input = this.hostElement.nativeElement;
  }

  @HostListener('input') ngOnChanges(): void {
    /* this.input.value = this.input.value.replace(',', '.');
    if (this.input.value.trim() == '') {
      this.input.value = '0';
    } else {
      const newValue = this.mask(parseFloat(this.input.value));
      this.input.value = newValue;
    } */
  }
  mask(old: number): any {
    return old.toFixed(1);
  }
}
