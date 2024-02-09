import { Directive, ElementRef, HostListener, Renderer2, Input, HostBinding } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @Input() class: string = 'open';
    @HostBinding('class.open') isOpen = false;


    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }

    constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit(): void {
       
        
    }
}