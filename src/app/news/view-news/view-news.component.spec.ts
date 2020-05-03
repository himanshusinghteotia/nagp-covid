import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ViewNewsComponent } from './view-news.component';

describe('ViewNewsComponent', () => {
  let component: ViewNewsComponent;
  let fixture: ComponentFixture<ViewNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientTestingModule,],
      declarations: [ ViewNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Test News Count', () => {
    let result=component.news
    expect(result.length).toEqual(2)
  });

  it('Test UpdateNews()', () => {
    component.updateNews()
    let result=component.news
    expect(result.length).toBeGreaterThanOrEqual(2)
  });
});
