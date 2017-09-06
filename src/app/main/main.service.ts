import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { ServiceBase } from 'app/common/services/service.base';
import { ViewModel } from 'app/common/model/viewmodel';
import { GlobalService } from '../global.service';
import { GlobalServiceCulture, Translated, TranslatedField } from '../global.service.culture';

@Injectable()
export class MainService extends ServiceBase {

    private _fieldsTransleted: any;

    constructor(private globalServiceCulture: GlobalServiceCulture, private api: ApiService<any>) {
        super();
    }


    updateCulture(vm: any, culture: string = null) {

        if (culture)
            this.globalServiceCulture.setCulture(culture);

        this.getInfosTranslated(culture).then(result => {
            vm.infos = result;
        });

    }

    getGeneralInfos() {

        var culture = this.globalServiceCulture.getCulture();
        this.getInfosTranslated(culture).then((fields) => {
            this._fieldsTransleted = fields
        })
        return this._fieldsTransleted;
    }

     getInfosTranslated(culture: string) {
        var grupo = "Geral";
        return this.globalServiceCulture.getResource(grupo, culture, this.getInfosFields(), (culture, infosFields) => {
            return new Promise((resolve, reject) => {
                var translated = new Translated([
                    new TranslatedField("pt-BR", "Anterior", "pra traz"),
                    new TranslatedField("pt-BR", "NovoItem", "Add")
                ]);
                return resolve(this.globalServiceCulture.setResource(grupo, translated.get(culture), infosFields));
            });
        });
    }
  
    getInfosFields() {
        return {

            buscar: { label: 'Buscar', type: 'string', isKey: false, list: false },
            voltar: { label: 'Voltar', type: 'int', isKey: false, list: false },
            sair: { label: 'Sair', type: 'string', isKey: false, list: false },
            filtro: { label: 'Filtros', type: 'string', isKey: false, list: false },
            novoItem: { label: 'Novo item', type: 'string', isKey: false, list: false },
            titulo: { label: 'Titulo', type: 'string', isKey: false, list: false },
            acao: { label: 'AÃ§Ã£o', type: 'string', isKey: false, list: false },
            totalRegistro: { label: 'Total de registros', type: 'string', isKey: false, list: false },
            proximo: { label: 'PrÃ³ximo', type: 'string', isKey: false, list: false },
            anterior: { label: 'Anterior', type: 'string', isKey: false, list: false },
            filtrar: { label: 'Filtrar', type: 'string', isKey: false, list: false },
            salvar: { label: 'Salvar', type: 'string', isKey: false, list: false },
            cancelar: { label: 'Cancelar', type: 'string', isKey: false, list: false },
            sim: { label: 'Ok', type: 'string', isKey: false, list: false },
            imprimir: { label: 'Imprimir', type: 'string', isKey: false, list: false },
            procurar: { label: 'Procurar', type: 'string', isKey: false, list: false },
            excluir: { label: 'Excluir', type: 'string', isKey: false, list: false },
        }
    }
}
