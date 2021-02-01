import { Component, OnInit } from '@angular/core';
import { API_KEY } from 'src/config/config';
import { AuthenticationService } from 'src/services/authentication.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent {

    constructor(private authService: AuthenticationService) { }
    
    login() {
        this.authService.getJWTToken({ apikey: API_KEY }).subscribe(o => {
          localStorage.setItem('token', o.token);
        })
        
    }
}