import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperstarListComponent } from './superstar-list.component';

describe('SuperstarListComponent', () => {
  let component: SuperstarListComponent;
  let fixture: ComponentFixture<SuperstarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperstarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperstarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
