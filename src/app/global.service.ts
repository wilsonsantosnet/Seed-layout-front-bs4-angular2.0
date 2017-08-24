import { Injectable, EventEmitter } from '@angular/core'
import { Routes } from '@angular/router';
import config  from "../assets/appsettings.json";

export class GlobalService {

    static operationExecuted = new EventEmitter<OperationExecutedParameters>();
    static operationRequesting = new EventEmitter<boolean>();
    static notification = new EventEmitter<string>();

    private static _endpoint;

    public static getEndPoints() {

        if (!this._endpoint) {
            this._endpoint = new EndPoints();
            return this._endpoint;
        }

        return this._endpoint;
    }

    public static getAuthSettings() {
        return new AuthSettings();
    }

    public static operationExecutedParameters(_selector: string, _operation: any, _message: string = null) {
        return new OperationExecutedParameters(_selector, _operation, _message);
    }

};

export class OperationExecutedParameters {


    public selector: string;
    public operation: any;
    public message: string;

    constructor(_selector: string, _operation: any, _message: string) {

        this.selector = _selector;
        this.operation = _operation;
        this.message = _message;
    }

}

export class EndPoints {

    public DEFAULT: string;
    public AUTHAPI: string;
    public AUTH: string;
    public APP: string;
    public CNA_CORPORATIVE_API: string;
    public CNA_SHOPPING_API: string;

    public readonly DOWNLOAD: string;

    constructor() {

        this.setConfigSettings(config.ConfigSettings);
        this.DOWNLOAD = this.DEFAULT + "/document/download/";
    }

    
    private setConfigSettings(configSettings)
    {
        this.DEFAULT = configSettings.DEFAULT;
        this.AUTHAPI = configSettings.AUTHAPI;
        this.AUTH = configSettings.AUTH;
        this.APP = configSettings.APP;

        return true;
    }

};

export class AuthSettings {

    public readonly TYPE_LOGIN: string;
    public readonly CLIENT_ID: string;
    public readonly SCOPE: string;


    constructor() {
        this.TYPE_LOGIN = "SSO";
        this.CLIENT_ID = 'Cna.Escola-spa';
        this.SCOPE = 'ssosa';
    }
};
