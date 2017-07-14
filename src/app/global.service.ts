import { Injectable, EventEmitter } from '@angular/core'

export class GlobalService {

    static operationExecuted = new EventEmitter<OperationExecutedParameters>();
    static operationRequesting = new EventEmitter<boolean>();


    public static getEndPoints() {
        return new EndPoints();
    }

    public static getAuthSettings() {
        return new AuthSettings();
    }
   
    public static operationExecutedParameters(_selector: string, _operation: any, _message: string) {
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

    public readonly DEFAULT: string;
    public readonly AUTHAPI: string;
    public readonly AUTH: string;
    public readonly APP: string;

    constructor() {
        this.DEFAULT = 'http://localhost:8122/api';
        this.AUTHAPI = 'http://localhost:4000/api';
        this.AUTH = 'http://localhost:4000/';
        this.APP = 'http://localhost:4200';
    }
};

export class AuthSettings {

    public readonly TYPE_LOGIN: string;
    public readonly CLIENT_ID: string;
    public readonly SCOPE: string;
   

    constructor() {
        this.TYPE_LOGIN = "SSO";
        this.CLIENT_ID = 'Target-spa-v2';
        this.SCOPE = 'ssosa';
    
    }
};
