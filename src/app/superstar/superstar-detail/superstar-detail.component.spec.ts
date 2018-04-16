import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperstarDetailComponent } from './superstar-detail.component';

describe('SuperstarDetailComponent', () => {
  let component: SuperstarDetailComponent;
  let fixture: ComponentFixture<SuperstarDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperstarDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperstarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
