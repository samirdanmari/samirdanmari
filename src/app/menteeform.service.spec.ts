import { TestBed } from '@angular/core/testing';

import { MenteeformService } from './menteeform.service';

describe('MenteeformService', () => {
  let service: MenteeformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenteeformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
