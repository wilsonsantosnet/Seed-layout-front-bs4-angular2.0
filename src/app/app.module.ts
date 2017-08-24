import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ModalModule } from 'ngx-bootstrap/modal';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { ConfirmModalComponent } from 'app/common/components/confirm-modal.component';
import { RoutingDefault } from './app.routing';
import { RoutingCustom } from './app.custom.routing';
import { LoginComponent } from './login/login.component';
import { AuthService } from 'app/common/services/auth.service'
import { ApiService } from 'app/common/services/api.service';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoadingComponent } from './common/components/loading.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        LoginComponent,
        LoadingComponent,
        ConfirmModalComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        RoutingDefault,
        RoutingCustom,
        SimpleNotificationsModule.forRoot(),
        ModalModule.forRoot()
    ],
    providers: [AuthService, ApiService],
    bootstrap: [AppComponent]
})
export class AppModule { }
