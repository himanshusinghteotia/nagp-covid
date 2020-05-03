import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { LoginService } from './login.service'
import { Router } from "@angular/router";
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login: LoginService, private router: Router) {
  }
  /*
    * function to send login data
    */
  loginUser(form) {
    var validateUser: User = {
      name: "",
      emailId: form.value.EmailId,
      password: form.value.Password
    };
    this.login.getAdminData().subscribe((event: any) => {
      var result = this.userValiadte(event, validateUser)
      if (result != null) {
        localStorage.setItem('user', JSON.stringify(result))
        localStorage.setItem('flag', "logged")
        this.router.navigate(["/addnews"])
      }
      else {
        swal.fire("Error!", "Incorrect Credentials.", "error");
        this.router.navigate[""]
      }
    })
  }

  userValiadte(event, validateUser) {
    if (event.emailId == validateUser.emailId && event.password == validateUser.password) {
      return event
    }
    else {
      return null
    }
  }

  checkLogin() {
    if (localStorage.getItem('flag') === "logged") {
      swal.fire("Error!", "You are already Logged In.", "error");
      this.router.navigate(["/addnews"])
    } else {
      return false;
    }
  }

  ngOnInit() {
    this.checkLogin()
  }
}