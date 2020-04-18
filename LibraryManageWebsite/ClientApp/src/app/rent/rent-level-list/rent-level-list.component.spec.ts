import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentLevelListComponent } from './rent-level-list.component';

describe('RentLevelListComponent', () => {
  let component: RentLevelListComponent;
  let fixture: ComponentFixture<RentLevelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentLevelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentLevelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
