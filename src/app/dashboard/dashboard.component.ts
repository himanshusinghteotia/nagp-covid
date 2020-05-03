import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { CountryInterface } from './country';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService, private route: Router) { }

  country: CountryInterface;

  getDataFromCountryAPI() {
    this.dashboardService.getCountryData().subscribe((event: CountryInterface) => {
      this.country = event
    })
  }

  stateDetail(state: String) {
    this.route.navigate(['/' + state]);
  }

  ngOnInit() {
    this.getDataFromCountryAPI()
  }

}