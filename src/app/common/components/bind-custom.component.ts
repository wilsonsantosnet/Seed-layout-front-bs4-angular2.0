import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { DatePipe, DecimalPipe, PercentPipe, CurrencyPipe } from "@angular/common";
import { ApiService } from "app/common/services/api.service";

@Component({
    selector: 'bind-custom',
    template: `
      <span *ngIf="tag === 'span' || !tag">{{ value }}</span>
      <label *ngIf="tag === 'label'">{{ value }}</label>
      <p *ngIf="tag === 'p'">{{ value }}</p>
      <div *ngIf="tag === 'div'">{{ value }}</div>
    `,
    providers: [DatePipe, DecimalPipe, PercentPipe, CurrencyPipe, ApiService],
})
export class BindCustomComponent implements OnInit, OnChanges {
        


    value: any;

    @Input() model: any;
    @Input() format: string;
    @Input() tag: string;
    @Input() instance: string;
    @Input() filterid: string;

    constructor(
        private datePipe: DatePipe,
        private decimalPipe: DecimalPipe,
        private percentPipe: PercentPipe,
        private currencyPipe: CurrencyPipe,
        private api: ApiService<any>) { }

    ngOnChanges(changes: SimpleChanges): void {
        
        if (this.format === 'date')
            this.value = this.datePipe.transform(this.model, 'dd/MM/yyyy');

        else if (this.format === 'time')
            this.value = this.datePipe.transform(this.model, 'HH:mm');

        else if (this.format === 'datetime')
            this.value = this.datePipe.transform(this.model, 'dd/MM/yyyy HH:mm');

        else if (this.format === 'decimal')
            this.value = this.decimalPipe.transform(this.model, '1.2-2');

        else if (this.format === 'integer')
            this.value = this.decimalPipe.transform(this.model, '1.0-0');

        else if (this.format === 'percent')
            this.value = this.percentPipe.transform(this.model, '1.2-2');

        else if (this.format === 'currency')
            this.value = this.currencyPipe.transform(this.model, 'BRL', true, '1.2-2');

        else if (this.format === 'bool')
            this.value = (this.model == true ? "Sim" : "Não");

        else if (this.format === 'instance')
            this._getInstance();

        else
            this.value = this.model;
    }

    ngOnInit(): void {

    }


    private _getInstance() {

        if (!this.instance || !this.model) {
            this.value = "carregando...";
            return;
        }

        var filter = eval("[{ " + this.filterid + ": " + this.model + " }]");
        this.api.setResource(this.instance).getDataitem(filter[0]).subscribe(data => {
            this.value = data.dataList[0].name;
        });
    }

}
