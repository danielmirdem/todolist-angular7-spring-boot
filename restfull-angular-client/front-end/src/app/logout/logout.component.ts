import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from "./../service/hardcoded-authentication.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authenticationService: BasicAuthenticationService) { }

  ngOnInit() {
    this.authenticationService.logout();
  }

}
