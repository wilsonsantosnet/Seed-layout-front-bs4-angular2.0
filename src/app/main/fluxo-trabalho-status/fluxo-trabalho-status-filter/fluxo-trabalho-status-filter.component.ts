import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-fluxo-trabalho-status-filter',
    templateUrl: './fluxo-trabalho-status-filter.component.html',
    styleUrls: ['./fluxo-trabalho-status-filter.component.css']
})
export class FluxoTrabalhoStatusFilterComponent implements OnInit {

    @Input() vm: any;

    constructor() { }

    ngOnInit() {
    }


    public onChange_makeSelect_modelFilter_fluxoTrabalhoTipoId(eventArgs) {

        this.vm.modelFilter.fluxoTrabalhoTipoId = eventArgs;
    }

}
