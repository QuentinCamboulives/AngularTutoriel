import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperstarListItemComponent } from './superstar-list-item.component';

describe('SuperstarListItemComponent', () => {
  let component: SuperstarListItemComponent;
  let fixture: ComponentFixture<SuperstarListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperstarListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperstarListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
