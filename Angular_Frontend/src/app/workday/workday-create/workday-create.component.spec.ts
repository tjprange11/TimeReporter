import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkdayCreateComponent } from './workday-create.component';

describe('WorkdayCreateComponent', () => {
  let component: WorkdayCreateComponent;
  let fixture: ComponentFixture<WorkdayCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkdayCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkdayCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
