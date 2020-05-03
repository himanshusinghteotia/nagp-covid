import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DashboardService } from './dashboard.service';

describe('DashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: DashboardService = TestBed.get(DashboardService);
    expect(service).toBeTruthy();
  });

  it('Test data urls', () => {
    const service: DashboardService = TestBed.get(DashboardService);
    expect(service.BASE_URL_COUNTRY).toEqual("https://api.covid19india.org/data.json")
  });

});
