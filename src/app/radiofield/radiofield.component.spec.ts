import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiofieldComponent } from './radiofield.component';

describe('RadiofieldComponent', () => {
  let component: RadiofieldComponent;
  let fixture: ComponentFixture<RadiofieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiofieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiofieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
