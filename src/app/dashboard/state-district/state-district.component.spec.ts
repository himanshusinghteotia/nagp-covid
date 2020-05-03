import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StateDistrictComponent } from './state-district.component';

describe('StateDistrictComponent', () => {
  let component: StateDistrictComponent;
  let fixture: ComponentFixture<StateDistrictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule],
      declarations: [ StateDistrictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Check getDataFromStateAPI() for Delhi', () => {
    component.stateId="Delhi"
    component.getDataFromStateAPI()
    expect(component.map.get.length).toBeGreaterThanOrEqual(1)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
