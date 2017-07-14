import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination'

import { FluxoTrabalhoStatusComponent } from './fluxo-trabalho-status.component';
import { FluxoTrabalhoStatusEditComponent } from './fluxo-trabalho-status-edit/fluxo-trabalho-status-edit.component';
import { FluxoTrabalhoStatusFieldComponent } from './fluxo-trabalho-status-field/fluxo-trabalho-status-field.component';
import { FluxoTrabalhoStatusFilterComponent } from './fluxo-trabalho-status-filter/fluxo-trabalho-status-filter.component';
import { FluxoTrabalhoStatusPrintModule } from './fluxo-trabalho-status-print/fluxo-trabalho-status-print.module';
import { FluxoTrabalhoStatusRoutingModule } from './fluxo-trabalho-status.routing.module';
import { FluxoTrabalhoStatusService } from './fluxo-trabalho-status.service';

import { ConfirmModalComponent } from 'app/common/components/confirm-modal.component';
import { ApiService } from 'app/common/services/api.service';
import { MakeSelectComponent } from 'app/common/components/select.component';
import { MakePaginationComponent } from 'app/common/components/pagination.component';

import { ValidationCustom } from 'app/common/directives/validation-custom.directive';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FluxoTrabalhoStatusRoutingModule,
        FluxoTrabalhoStatusPrintModule,
        ModalModule.forRoot(),
        PaginationModule.forRoot()
    ],
    declarations: [
        FluxoTrabalhoStatusComponent,
        FluxoTrabalhoStatusEditComponent,
        MakeSelectComponent,
        MakePaginationComponent,
        ConfirmModalComponent,
        FluxoTrabalhoStatusFieldComponent,
        FluxoTrabalhoStatusFilterComponent,
        ValidationCustom
    ],
    providers: [FluxoTrabalhoStatusService, ApiService, ConfirmModalComponent],
})
export class FluxoTrabalhoStatusModule {



}