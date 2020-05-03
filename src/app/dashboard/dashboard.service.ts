import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  BASE_URL_STATE = 'https://api.covid19india.org/state_district_wise.json'
  BASE_URL_COUNTRY = 'https://api.covid19india.org/data.json'
  constructor(private http: HttpClient) { }

  getStateData() {
    return this.http.get<any>(this.BASE_URL_STATE);
  }

  getCountryData() {
    return this.http.get<any>(this.BASE_URL_COUNTRY);
  }
}