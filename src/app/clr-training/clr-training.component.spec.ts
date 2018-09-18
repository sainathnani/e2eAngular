import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClrTrainingComponent } from './clr-training.component';

describe('ClrTrainingComponent', () => {
  let component: ClrTrainingComponent;
  let fixture: ComponentFixture<ClrTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClrTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClrTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
