import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BoldTextPipe} from './bold-text.pipe'
import { PrecautionsComponent } from './precautions.component';

describe('PrecautionsComponent', () => {
  let component: PrecautionsComponent;
  let fixture: ComponentFixture<PrecautionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [ PrecautionsComponent,BoldTextPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecautionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('test Instruction Count', () => {
    let result=component.instructions
    expect(result.length).toEqual(5)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
