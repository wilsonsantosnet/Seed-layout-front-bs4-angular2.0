import { Directive, ElementRef, Renderer } from '@angular/core';

declare var jQuery: any;

@Directive({
    selector: '[validation-custom]'
})

export class ValidationCustom {

    constructor(private _elemetRef: ElementRef, private _renderer: Renderer) {

        //console.log(this._elemetRef);
        console.log("ValidationCustom",this._elemetRef.nativeElement.innerHTML);
        //console.log(this._elemetRef.nativeElement.querySelector('.ng-invalid'));


       
        //console.log(this._elemetRef.nativeElement.childNodes[0].childNodes[1]);

        //this.root(this._elemetRef.nativeElement);

        
    }

    
}
