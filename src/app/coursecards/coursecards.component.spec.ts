import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursecardsComponent } from './coursecards.component';

describe('CoursecardsComponent', () => {
  let component: CoursecardsComponent;
  let fixture: ComponentFixture<CoursecardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursecardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
