import { TestBed, inject } from '@angular/core/testing';

import { GetcourseService } from './getcourse.service';

describe('GetcourseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetcourseService]
    });
  });

  it('should be created', inject([GetcourseService], (service: GetcourseService) => {
    expect(service).toBeTruthy();
  }));
});
