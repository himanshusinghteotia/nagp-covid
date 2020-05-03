import { Injectable} from '@angular/core';
import { User } from './user'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  BASE_URL = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  getAdminData() {
    return this.http.get<User[]>(this.BASE_URL + "/admin");
  }
}
