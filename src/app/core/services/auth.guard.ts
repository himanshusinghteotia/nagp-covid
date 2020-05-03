import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from '../models/role'
import swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem("user") != null) {
      let role = next.data.roles;
      if (role) {
        let currentRole = JSON.parse(localStorage.getItem("user"))
        if (currentRole == 0) {
          currentRole = Role.User;
        }
        else {
          currentRole = Role.Admin;
        }
        if (role === currentRole) {
          return true;
        }
        else {
          swal.fire("Error!", "You are not Valid User", "error")
          this.router.navigate([""]);
          return false;
        }
      }
      return true;
    }
    else {
      swal.fire("Error!", "Not Allowed. Login First.", "error")
      this.router.navigate([""]);
      return false;
    }
  }
}