import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FluxoTrabalhoStatusPrintComponent } from './fluxo-trabalho-status-print.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: FluxoTrabalhoStatusPrintComponent },
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class FluxoTrabalhoStatusPrintRoutingModule {

}