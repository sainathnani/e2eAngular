import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItDevComponent } from './it-dev.component';

describe('ItDevComponent', () => {
  let component: ItDevComponent;
  let fixture: ComponentFixture<ItDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
