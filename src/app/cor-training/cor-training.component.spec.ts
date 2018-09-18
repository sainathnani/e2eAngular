import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorTrainingComponent } from './cor-training.component';

describe('CorTrainingComponent', () => {
  let component: CorTrainingComponent;
  let fixture: ComponentFixture<CorTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
