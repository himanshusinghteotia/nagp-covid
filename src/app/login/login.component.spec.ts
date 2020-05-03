import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { RouterTestingModule } from '@angular/router/testing';
import {User} from './user';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
      declarations: [LoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('test checkLogin()', () => {
    let result = component.checkLogin()
    expect(result.valueOf()).toEqual(false)
  });

  it('test userValiadte()', () => {
    let user1:User =new User();
    user1.emailId="himanshu@gmail.com"
    user1.name="himanshu"
    user1.password="himanshu"
    let user2:User=new User();
    user2.emailId="himanshu@gmail.com"
    user2.name="himanshu"
    user2.password="himanshu"
    
    let result = component.userValiadte(user1,user2)
    expect(result.valueOf()).toEqual(user1)
  });
});