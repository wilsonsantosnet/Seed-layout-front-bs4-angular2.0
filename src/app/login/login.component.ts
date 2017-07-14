import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/common/services/auth.service'
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


    typeLogin: string;

    constructor(private authService: AuthService) {
        this.typeLogin = GlobalService.getAuthSettings().TYPE_LOGIN;
        console.log(this.typeLogin);
    }

    ngOnInit() {

        this.authService.loginSso();
  }

}
