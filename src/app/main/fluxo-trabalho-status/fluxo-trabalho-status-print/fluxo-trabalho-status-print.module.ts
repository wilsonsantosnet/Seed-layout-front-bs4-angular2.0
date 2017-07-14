import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FluxoTrabalhoStatusPrintComponent } from './fluxo-trabalho-status-print.component';
import { FluxoTrabalhoStatusPrintRoutingModule } from './fluxo-trabalho-status-print.routing.module';

import { FluxoTrabalhoStatusService } from '../fluxo-trabalho-status.service';
import { ConfirmModalComponent } from 'app/common/components/confirm-modal.component';
import { ApiService } from 'app/common/services/api.service';

import { FluxoTrabalhoStatusDetailsComponent } from '../fluxo-trabalho-status-details/fluxo-trabalho-status-details.component';
import { BindCustomComponent } from 'app/common/components/bind-custom.component';

@NgModule({
    imports: [
        CommonModule,
        FluxoTrabalhoStatusPrintRoutingModule,
    ],
    declarations: [
        FluxoTrabalhoStatusPrintComponent,
        FluxoTrabalhoStatusDetailsComponent,
        BindCustomComponent,
    ],
    providers: [FluxoTrabalhoStatusService, ApiService, ConfirmModalComponent],
    exports: [FluxoTrabalhoStatusDetailsComponent, BindCustomComponent]
})
export class FluxoTrabalhoStatusPrintModule {

}
