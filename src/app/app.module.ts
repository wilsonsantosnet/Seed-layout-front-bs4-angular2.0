﻿import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER  } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';

import { SimpleNotificationsModule } from 'angular2-notifications';
import { ConfirmModalComponent } from 'app/common/components/confirm-modal.component';
import { RoutingDefault } from './app.routing';
import { RoutingCustom } from './app.custom.routing';
import { LoginComponent } from './login/login.component';
import { AuthService } from './common/services/auth.service'
import { ApiService } from './common/services/api.service';
import { ServiceBase } from './common/services/service.base';
import { MainService } from './main/main.service';
import { StartupService } from './startup.service';


import { GlobalServiceCulture } from './global.service.culture';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoadingComponent } from './common/components/loading.component';
import { MenuAsideComponent } from './common/components/menu-aside.component';
import { MenuTopComponent } from './common/components/menu-top.component';
import { FooterComponent } from './common/components/footer.component';


export function startupServiceFactory(startupService: StartupService): Function {
    return () => startupService.load();
}

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        LoginComponent,
        LoadingComponent,
        ConfirmModalComponent,
        MenuAsideComponent,
        MenuTopComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpModule,
        RoutingDefault,
        RoutingCustom,
        SimpleNotificationsModule.forRoot(),
        ModalModule.forRoot(),
        PopoverModule.forRoot(),
    ],
    providers: [
        HttpModule,
        StartupService,
        {
            provide: APP_INITIALIZER,
            useFactory: startupServiceFactory,
            deps: [StartupService],
            multi: true
        },
        AuthService,
        ApiService,
        MainService,
        ServiceBase,
        GlobalServiceCulture
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
