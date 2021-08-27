import { TestBed } from '@angular/core/testing';

import { ExampleTestService } from './example-test.service';

describe('ExampleTestService', () => {
  let service: ExampleTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
