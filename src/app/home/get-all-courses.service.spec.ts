import { TestBed, inject } from '@angular/core/testing';

import { GetAllCoursesService } from './get-all-courses.service';

describe('GetAllCoursesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllCoursesService]
    });
  });

  it('should be created', inject([GetAllCoursesService], (service: GetAllCoursesService) => {
    expect(service).toBeTruthy();
  }));
});
