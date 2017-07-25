import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';

const APP_ROUTES: Routes = [
    { path: '', component: MainComponent },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
