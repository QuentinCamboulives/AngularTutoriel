import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperstarCreateComponent } from './superstar-create.component';

describe('SuperstarCreateComponent', () => {
  let component: SuperstarCreateComponent;
  let fixture: ComponentFixture<SuperstarCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperstarCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperstarCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
