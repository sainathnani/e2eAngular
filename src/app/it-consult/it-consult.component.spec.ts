import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItConsultComponent } from './it-consult.component';

describe('ItConsultComponent', () => {
  let component: ItConsultComponent;
  let fixture: ComponentFixture<ItConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItConsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
