import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginUserStatus

  constructor(private route: Router) { }

  /*
  * function to hide and show the various links in navigation bar according to the login status
  */
  hideCheck() {
    if (localStorage.getItem('flag') == "logged")
      return false;
    else if (localStorage.getItem('flag') == null)
      return true;
  }

  userAndAdminCheck() {
    if (localStorage.getItem("user") != null) {
      this.loginUserStatus = JSON.parse(localStorage.getItem("user"));
    }
    else {
      return true;
    }
    if (this.loginUserStatus == 0) {
      return true;
    }
    else {
      return false;
    }
  }

  /*
  * function to remove the logged in user from the local storage
  */
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('flag');
    this.route.navigate(['']);
  }

  ngOnInit() {
    this.hideCheck();
    this.userAndAdminCheck();
  }
}