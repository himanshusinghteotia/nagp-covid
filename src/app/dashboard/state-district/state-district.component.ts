import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-state-district',
  templateUrl: './state-district.component.html',
  styleUrls: ['./state-district.component.css']
})
export class StateDistrictComponent implements OnInit {

  map = new Map([])
  stateId: String;

  constructor(private dashboardService: DashboardService, private route: ActivatedRoute) {
    this.stateId = this.route.snapshot.params.state;
  }

  getDataFromStateAPI() {
    var stateName: any = this.stateId
    this.dashboardService.getStateData().subscribe((event: any) => {
      let keyArrDistricts = Object.keys(event[stateName].districtData);
      keyArrDistricts.forEach((key: any) => {
        this.map.set(key, event[stateName].districtData[key])
      });
    })
  }
  ngOnInit() {
    this.getDataFromStateAPI()
  }
}