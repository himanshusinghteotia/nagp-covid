import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('test userAndAdminCheck()', async(() => {
    component.logout()
    let result=component.userAndAdminCheck()
    expect(result.valueOf()).toEqual(true)
  }));

  it('test hideCheck()', async(() => {
    let result=component.hideCheck()
    expect(result.valueOf()).toEqual(true)
  }));

});
