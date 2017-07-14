import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-fluxo-trabalho-status-details',
    templateUrl: './fluxo-trabalho-status-details.component.html',
    styleUrls: ['./fluxo-trabalho-status-details.component.css']
})
export class FluxoTrabalhoStatusDetailsComponent implements OnInit {


    @Input() vm: any;

    constructor() { }

    ngOnInit() {

    }

}
