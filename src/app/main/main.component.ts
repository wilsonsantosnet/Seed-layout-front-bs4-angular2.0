import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/common/services/auth.service'
import { GlobalServiceCulture } from '../global.service.culture'
import { GlobalService } from '../global.service'
import { MainService } from './main.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
    providers: [GlobalServiceCulture, MainService]
})
export class MainComponent implements OnInit {

    vm: any;
    menuIsOpen: boolean;
    constructor(private authService: AuthService, private globalServiceCulture: GlobalServiceCulture, private mainService: MainService) {

        this.vm = {};
        this.menuIsOpen = true;
        this.vm.generalInfos = this.mainService.getGeneralInfos();

        GlobalService.changeCulture.subscribe((culture) => {
            this.mainService.updateCulture(this.vm, culture);
        });
    }

    onUpdateCulture(event, culture: string) {

        event.preventDefault();
        this.mainService.updateCulture(this.vm, culture);
        GlobalService.changeCulture.emit(culture);

    }

    ngOnInit() {

        this.authService.getCurrentUser((result) => {
            if (result.isAuth) {
                if (result.claims.name != null) {
                    this.vm.userName = result.claims.name
                }

                if (result.claims.role != null) {
                    this.vm.userRole = result.claims.role
                }

                if (result.claims.tools != null) {
                    this.vm.menu = JSON.parse(result.claims.tools)
                }
            }

        });
    }

    onToggleMenu() {

        this.menuIsOpen = !this.menuIsOpen
    }

    onLogout(e) {
        e.preventDefault();
        this.authService.logout();
    }

}
