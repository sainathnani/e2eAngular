import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueStripComponent } from './blue-strip.component';

describe('BlueStripComponent', () => {
  let component: BlueStripComponent;
  let fixture: ComponentFixture<BlueStripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueStripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
