import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({ selector: '[appDropdown]' })
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;

  @HostListener('click') toggleOpen() {
    console.log('menu option clicked');
    this.isOpen = !this.isOpen;
  }
}
