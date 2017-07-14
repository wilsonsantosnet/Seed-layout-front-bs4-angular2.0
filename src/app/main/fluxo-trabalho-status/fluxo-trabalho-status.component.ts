import { Component, OnInit, ViewChild, Output, EventEmitter, } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { FluxoTrabalhoStatusService } from './fluxo-trabalho-status.service';
import { GlobalService } from '../../global.service';


@Component({
    selector: 'app-fluxo-trabalho-status',
    templateUrl: './fluxo-trabalho-status.component.html',
    styleUrls: ['./fluxo-trabalho-status.component.css'],
})
export class FluxoTrabalhoStatusComponent implements OnInit {

    vm: any;

    operationConfimationYes: any;

    @ViewChild('saveModal') private saveModal: ModalDirective;
    @ViewChild('editModal') private editModal: ModalDirective;
    @ViewChild('detailsModal') private detailsModal: ModalDirective;
    @ViewChild('formCreate') private formCreate;

    constructor(private fluxoTrabalhoStatusService: FluxoTrabalhoStatusService, private router: Router) {

        this.vm = {};
    }

    ngOnInit() {


        this.vm = this.fluxoTrabalhoStatusService.initVM();

        this.fluxoTrabalhoStatusService.get().subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        })

    }


    public onFilter(modelFilter) {

        this.fluxoTrabalhoStatusService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        })
    }

    public onExport() {


    }

    public onCreate() {

        this.vm.model = {};
        this.saveModal.show();
    }

    public onEdit(model) {

        this.editModal.show();
        this.fluxoTrabalhoStatusService.get({ id: model }).subscribe((result) => {
            this.vm.model = result.data;
        })

    }

    public onSave(model) {

        this.fluxoTrabalhoStatusService.save(model).subscribe((result) => {

            this.vm.filterResult = this.vm.filterResult.filter(function (el) {
                return el.fluxoTrabalhoStatusId !== result.data.fluxoTrabalhoStatusId;
            });

            this.vm.filterResult.push(result.data);
            this.vm.summary.total = this.vm.filterResult.length
        });

        this.saveModal.hide();
        this.editModal.hide();
    }

    public onDetails(model) {

        this.detailsModal.show();

        this.fluxoTrabalhoStatusService.get({ id: model }).subscribe((result) => {
            this.vm.model = result.data;
        })

    }

    public onCancel() {

        this.saveModal.hide();
        this.editModal.hide();
        this.detailsModal.hide();
    }


    public onPrint(id) {
        this.router.navigate(['/fluxotrabalhostatus/print', id]);
    }

    public onDeleteConfimation(model) {

        var conf = GlobalService.operationExecutedParameters(
            "confirm-modal",
            () => {
                this.fluxoTrabalhoStatusService.delete({ fluxoTrabalhoStatusId: model }).subscribe((result) => {
                    this.vm.filterResult = this.vm.filterResult.filter(function (el) {
                        return el.fluxoTrabalhoStatusId !== model;
                    });
                    this.vm.summary.total = this.vm.filterResult.length
                });
            },
            this.vm.messageConfirmation
        );

        GlobalService.operationExecuted.emit(conf);
    }

    public onConfimationYes() {
        this.operationConfimationYes();
    }

    public onPageChanged(e) {

        let modelFilter = this.fluxoTrabalhoStatusService.pagingConfig(this.vm.modelFilter, e);

        this.fluxoTrabalhoStatusService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
            console.log(this.vm.filterResult);
        });
    }

    public onOrderBy(field) {
        console.log(field);
    }


    


}
