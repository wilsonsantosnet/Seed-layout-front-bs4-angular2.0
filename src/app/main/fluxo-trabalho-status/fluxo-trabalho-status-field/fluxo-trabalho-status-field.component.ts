import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'app-fluxo-trabalho-status-field',
    templateUrl: './fluxo-trabalho-status-field.component.html',
    styleUrls: ['./fluxo-trabalho-status-field.component.css']
})
export class FluxoTrabalhoStatusFieldComponent implements OnInit {

    @Input() vm: any;


    constructor() { }

    ngOnInit() {
        this.isValid();
    }

    public onSave(model)
    {

    }

    public onCancel() {

    }

    public onChange_makeSelect_model_fluxoTrabalhoTipoId(eventArgs) {
        this.vm.model.fluxoTrabalhoTipoId = eventArgs;
        this.isValid();
    }
    public isValid() {

        for (let key in this.vm.required) {
            if (this.vm.required.hasOwnProperty(key)) {

                console.log("isValid", this.vm.model);

                if (this.vm.model[key] == null || this.vm.model[key] == undefined || this.vm.model[key] == "undefined" || this.vm.model[key] == "") {
                    this.vm.isValid = false;
                    return false;
                }
            }
        }
        this.vm.isValid = true;
        return true;

    }

}
