import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[autofocus]'
})

export class AutoFocusDirective implements OnInit{
    constructor(public element: ElementRef) {}
    ngOnInit(): void{
        this.element.nativeElement.focus();
    }
}